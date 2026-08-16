#!/usr/bin/env node
/**
 * Pulls the Problem of the Day archive out of the shared Google Drive folder
 * and writes it to `data/potd.json`.
 *
 * Run daily by .github/workflows/sync-potd.yml. The workflow commits the
 * result, which triggers the existing `cd` workflow, so the problems end up
 * baked into the generated site - the browser never calls Drive.
 *
 * Usage:
 *   node scripts/sync-potd.js            # write data/potd.json
 *   node scripts/sync-potd.js --dry-run  # print what would change, write nothing
 *   node scripts/sync-potd.js --list     # print a folder inventory, parse nothing
 *
 * --list reports each file's name, type, size and what the parser makes of it,
 * so the layout of the folder can be checked without opening Drive. It prints
 * the opening line of released problems only; anything dated in the future is
 * withheld, since these logs can be public.
 *
 * Auth, in precedence order:
 *   GOOGLE_ACCESS_TOKEN - OAuth bearer token; works for a private folder.
 *   GOOGLE_API_KEY      - plain API key; only works if the folder is shared
 *                         "anyone with the link can view".
 *
 * Other env:
 *   POTD_FOLDER_ID  - override the folder (defaults to FOLDER_ID below)
 *   POTD_TODAY      - override today's date as YYYY-MM-DD (testing only)
 */

const fs = require('fs')
const path = require('path')

const FOLDER_ID = process.env.POTD_FOLDER_ID || '11swa5VX-w-W2ewmLp0h4OQIYZuD5TlKz'
const OUTPUT = path.join(__dirname, '..', 'data', 'potd.json')
const DRIVE = 'https://www.googleapis.com/drive/v3'

const DRY_RUN = process.argv.includes('--dry-run')
const LIST_ONLY = process.argv.includes('--list')

/* ---------------------------------------------------------------- auth --- */

function authQuery() {
  if (process.env.GOOGLE_ACCESS_TOKEN) return ''
  if (process.env.GOOGLE_API_KEY) return `&key=${encodeURIComponent(process.env.GOOGLE_API_KEY)}`
  throw new Error(
    'No Drive credentials. Set GOOGLE_ACCESS_TOKEN (private folder) or ' +
      'GOOGLE_API_KEY (folder shared as "anyone with the link").'
  )
}

function authHeaders() {
  return process.env.GOOGLE_ACCESS_TOKEN
    ? { Authorization: `Bearer ${process.env.GOOGLE_ACCESS_TOKEN}` }
    : {}
}

async function driveGet(url) {
  const res = await fetch(url, { headers: authHeaders() })
  if (!res.ok) {
    const body = await res.text().catch(() => '')
    if (res.status === 404) {
      throw new Error(
        `Drive returned 404 for the folder. Either the ID is wrong or it is not ` +
          `readable with these credentials. With GOOGLE_API_KEY the folder must be ` +
          `shared "anyone with the link can view".\n${body.slice(0, 400)}`
      )
    }
    throw new Error(`Drive ${res.status} ${res.statusText}\n${body.slice(0, 400)}`)
  }
  return res
}

/* --------------------------------------------------------------- drive --- */

async function listFolder(folderId) {
  const files = []
  let pageToken = ''
  do {
    const q = encodeURIComponent(`'${folderId}' in parents and trashed = false`)
    const url =
      `${DRIVE}/files?q=${q}` +
      `&fields=nextPageToken,files(id,name,mimeType,modifiedTime)` +
      `&pageSize=200&orderBy=name` +
      (pageToken ? `&pageToken=${pageToken}` : '') +
      authQuery()
    const json = await (await driveGet(url)).json()
    files.push(...(json.files || []))
    pageToken = json.nextPageToken || ''
  } while (pageToken)
  return files
}

async function fetchText(file) {
  // Google-native docs must be exported; everything else downloads as-is.
  const url = file.mimeType.startsWith('application/vnd.google-apps.')
    ? `${DRIVE}/files/${file.id}/export?mimeType=text/plain${authQuery()}`
    : `${DRIVE}/files/${file.id}?alt=media${authQuery()}`
  return (await driveGet(url)).text()
}

/* -------------------------------------------------------------- parsing --- */

const DIVISION_FROM_TEXT = /division\s*([12])\b/i
const DATE_ISO = /(20\d{2})-(\d{2})-(\d{2})/
const DATE_US = /\b(\d{1,2})[-_/](\d{1,2})[-_/](20\d{2})\b/
const MONTHS = [
  'january', 'february', 'march', 'april', 'may', 'june',
  'july', 'august', 'september', 'october', 'november', 'december',
]
const DATE_WORDS = new RegExp(`\\b(${MONTHS.join('|')})\\w*\\.?\\s+(\\d{1,2})(?:st|nd|rd|th)?,?\\s*(20\\d{2})\\b`, 'i')

const pad = (n) => String(n).padStart(2, '0')

/** Pull a YYYY-MM-DD out of a filename or document text, or null. */
function findDate(text) {
  let m = text.match(DATE_ISO)
  if (m) return `${m[1]}-${m[2]}-${m[3]}`
  m = text.match(DATE_WORDS)
  if (m) return `${m[3]}-${pad(MONTHS.indexOf(m[1].toLowerCase()) + 1)}-${pad(m[2])}`
  m = text.match(DATE_US)
  if (m) return `${m[3]}-${pad(m[1])}-${pad(m[2])}`
  return null
}

/** Pull a division number out of a filename or document text, or null. */
function findDivision(text) {
  const m = text.match(DIVISION_FROM_TEXT)
  if (m) return Number(m[1])
  const short = text.match(/\b[dD]([12])\b/)
  return short ? Number(short[1]) : null
}

/** Files that are not problems at all: subfolders, .DS_Store, stray binaries. */
function isProblemFile(file) {
  if (file.mimeType === 'application/vnd.google-apps.folder') return false
  if (file.name.startsWith('.')) return false
  return /\.md$/i.test(file.name) || file.mimeType === 'text/markdown' || file.mimeType.startsWith('text/')
}

/**
 * Turn one Drive file into POTD entries.
 *
 * ADAPTER: the only part that depends on how the Drive files are laid out,
 * isolated so it can be swapped without touching fetch, validation or write.
 *
 * The folder's own format is one markdown file per problem, named
 * `POTD_YYYY-MM-DD_DIV1.md`, laid out as:
 *
 *     # YIMO II - Problem of the Day
 *     ## Division 1 | August 2, 2026
 *     ---
 *     ## Problem
 *     <statement, possibly several paragraphs and $$display$$ math>
 *     ---
 *     ## Answer
 *     ## Solution
 *     ## Notes
 *
 * The statement is kept separate from the answer, the worked solution and the
 * notes: the index page lists statements only, and each problem's own page
 * carries the rest. `### Step` subheadings inside a solution are left in place
 * for the page to render.
 */

/** Split a document into its `## ` sections, keyed by lowercased heading. */
function splitSections(body) {
  const heading = /^##[ \t]+(.+?)[ \t]*$/gm
  const marks = []
  let match
  while ((match = heading.exec(body))) {
    marks.push({ name: match[1].trim().toLowerCase(), from: match.index, to: heading.lastIndex })
  }
  const sections = {}
  marks.forEach((mark, index) => {
    const end = index + 1 < marks.length ? marks[index + 1].from : body.length
    sections[mark.name] = body
      .slice(mark.to, end)
      .replace(/^[ \t]*-{3,}[ \t]*$/gm, '')
      .replace(/\n{3,}/g, '\n\n')
      .trim()
  })
  return sections
}

function parseMarkdownProblem(file, text) {
  const body = text.replace(/\r\n/g, '\n')

  // Division and date come from the filename, which is the authoritative
  // naming scheme; the in-document heading is the fallback.
  const fromName = file.name.match(/POTD[_-](\d{4}-\d{2}-\d{2})[_-]DIV\s*([12])/i)
  const date = fromName ? fromName[1] : findDate(file.name) ?? findDate(body.split('\n').slice(0, 5).join(' '))
  const division = fromName
    ? Number(fromName[2])
    : findDivision(file.name) ?? findDivision(body.split('\n').slice(0, 5).join(' '))
  if (date == null || division == null) return []

  const sections = splitSections(body)
  if (!sections.problem) return []

  return [
    {
      division,
      date,
      slug: `${date}-div${division}`,
      problem: sections.problem,
      answer: sections.answer || '',
      solution: sections.solution || '',
      // `## Notes` is deliberately NOT carried across. In this folder it is the
      // authors' internal calibration log - it names individual solvers and how
      // fast they solved things - and data/potd.json is committed to a public
      // repository, so syncing it would publish it no matter what the page
      // renders. Add `notes: sections.notes` here to change that.
      source: file.name,
    },
  ]
}

/** Generic fallback for files that do not follow the markdown layout. */
function parseFile(file, text) {
  const markdown = parseMarkdownProblem(file, text)
  if (markdown.length) return markdown

  const body = text.replace(/\r\n/g, '\n').trim()
  const lines = body.split('\n')

  // Layout 2: headed sections inside a single document.
  const headings = []
  lines.forEach((line, i) => {
    const trimmed = line.trim()
    if (!trimmed || trimmed.length > 120) return
    const date = findDate(trimmed)
    const division = findDivision(trimmed)
    if (date && division) headings.push({ i, date, division })
  })

  if (headings.length > 1) {
    return headings.map((h, n) => ({
      division: h.division,
      date: h.date,
      problem: lines
        .slice(h.i + 1, n + 1 < headings.length ? headings[n + 1].i : lines.length)
        .join('\n')
        .trim(),
      source: file.name,
    }))
  }

  // Layout 1: one problem per file.
  const division = findDivision(file.name) ?? findDivision(lines.slice(0, 3).join(' '))
  const date = findDate(file.name) ?? findDate(lines.slice(0, 3).join(' '))
  if (division == null || date == null) return []

  // Drop any leading heading line that only restated the division/date.
  const start = headings.length === 1 && headings[0].i < 3 ? headings[0].i + 1 : 0
  return [{ division, date, problem: lines.slice(start).join('\n').trim(), source: file.name }]
}

/* ----------------------------------------------------------- validation --- */

function validate(entry) {
  const problems = []
  if (entry.division !== 1 && entry.division !== 2) problems.push(`division ${entry.division} is not 1 or 2`)
  if (!/^20\d{2}-\d{2}-\d{2}$/.test(entry.date)) problems.push(`date "${entry.date}" is not YYYY-MM-DD`)
  if (!entry.problem || entry.problem.length < 20) problems.push('statement is empty or suspiciously short')

  // Balanced delimiters, counting $$ as a pair so display math does not trip it.
  const display = (entry.problem.match(/\$\$/g) || []).length
  const inline = (entry.problem.match(/\$/g) || []).length - display * 2
  if (display % 2 !== 0) problems.push(`odd number of $$ delimiters (${display}) - KaTeX will not render`)
  if (inline % 2 !== 0) problems.push(`odd number of $ delimiters (${inline}) - KaTeX will not render`)

  // The answer and worked solution are published on the problem's own page, but
  // they must never bleed into the statement shown on the index.
  const leak = entry.problem.match(/^##[ \t]*(Answer|Solution|Notes)\b/im) || entry.problem.match(/\\boxed\{/)
  if (leak) problems.push(`statement contains answer/solution material ("${leak[0]}") - refusing to publish`)

  if (!/^\d{4}-\d{2}-\d{2}-div[12]$/.test(entry.slug || '')) problems.push(`bad slug "${entry.slug}"`)
  if (!entry.solution) problems.push('no ## Solution section - the problem page would be empty')

  return problems
}

/* ------------------------------------------------------------ inventory --- */

/**
 * Describe the folder without publishing anything. Enough detail to write or
 * correct the parseFile adapter; not enough to give away an unreleased problem.
 */
async function inventory(files, today) {
  console.log(`\n${files.length} file(s) in folder ${FOLDER_ID}:\n`)
  for (const file of files) {
    let text
    try {
      text = await fetchText(file)
    } catch (error) {
      console.log(`- ${file.name}\n    type: ${file.mimeType}\n    DOWNLOAD FAILED: ${error.message.split('\n')[0]}`)
      continue
    }
    const lines = text.replace(/\r\n/g, '\n').trim().split('\n')
    const parsed = parseFile(file, text)
    const dates = parsed.map((entry) => entry.date)
    const released = dates.length > 0 && dates.every((date) => date <= today)

    console.log(`- ${file.name}`)
    console.log(`    type: ${file.mimeType}  bytes: ${text.length}  lines: ${lines.length}`)
    console.log(
      `    parsed: ${parsed.length} entry(ies)` +
        (parsed.length ? ` -> ${parsed.map((e) => `div ${e.division} / ${e.date}`).join(', ')}` : '')
    )
    console.log(`    math markers: $=${(text.match(/\$/g) || []).length} backslash=${(text.match(/\\/g) || []).length}`)
    console.log(
      `    first line: ${released ? JSON.stringify(lines[0].slice(0, 60)) : '[withheld - unreleased or unparsed]'}`
    )
  }
  console.log('\nInventory only - nothing was written.')
}

/* ---------------------------------------------------------------- main --- */

async function main() {
  const today = process.env.POTD_TODAY || new Date().toISOString().slice(0, 10)

  const all = await listFolder(FOLDER_ID)
  if (!all.length) throw new Error(`Folder ${FOLDER_ID} is empty or unreadable.`)
  const files = all.filter(isProblemFile)
  console.log(
    `Found ${all.length} item(s) in the Drive folder; ${files.length} look like problem files ` +
      `(skipping ${all.length - files.length}: subfolders and dotfiles).`
  )

  if (LIST_ONLY) return inventory(files, today)

  const entries = []
  const skipped = []
  for (const file of files) {
    let text
    try {
      text = await fetchText(file)
    } catch (error) {
      skipped.push(`${file.name}: download failed - ${error.message.split('\n')[0]}`)
      continue
    }
    const parsed = parseFile(file, text)
    if (!parsed.length) {
      skipped.push(`${file.name}: could not find a division and a date`)
      continue
    }
    for (const entry of parsed) {
      const errors = validate(entry)
      if (errors.length) skipped.push(`${file.name} (${entry.date}): ${errors.join('; ')}`)
      else entries.push(entry)
    }
  }

  // Never publish a problem before its date - the folder holds future days too.
  const released = entries.filter((entry) => entry.date <= today)
  const withheld = entries.length - released.length

  // Last write wins on a duplicate division+date, so a corrected file replaces
  // the original rather than showing twice.
  const byKey = new Map(released.map((entry) => [entry.slug, entry]))
  const final = [...byKey.values()]
    .map(({ division, date, slug, problem, answer, solution }) => ({
      division,
      date,
      slug,
      problem,
      answer,
      solution,
    }))
    .sort((a, b) => a.division - b.division || a.date.localeCompare(b.date))

  console.log(`Parsed ${final.length} problem(s); ${withheld} not yet released; ${skipped.length} skipped.`)
  skipped.forEach((line) => console.warn(`  skipped: ${line}`))

  if (!final.length) throw new Error('Parsed zero problems - refusing to overwrite data/potd.json.')

  const next = JSON.stringify(final, null, 2) + '\n'
  const current = fs.existsSync(OUTPUT) ? fs.readFileSync(OUTPUT, 'utf8') : ''
  if (next === current) {
    console.log('data/potd.json is already up to date.')
    return
  }
  if (DRY_RUN) {
    console.log('--dry-run: data/potd.json would change.')
    return
  }
  fs.writeFileSync(OUTPUT, next)
  console.log(`Wrote ${final.length} problem(s) to data/potd.json.`)
}

main().catch((error) => {
  console.error(`sync-potd failed: ${error.message}`)
  process.exit(1)
})
