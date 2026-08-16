/**
 * Minimal markdown renderer for POTD problem statements and worked solutions.
 *
 * Deliberately hand-rolled and escape-first rather than pulling in a general
 * markdown library: the source lives in a Drive folder that several people can
 * edit, and the output is baked into a public static site. Because every
 * character is HTML-escaped before any transform runs, and the only tags that
 * exist in the output are the ones constructed here, no markup in the source
 * can reach the page.
 *
 * Supports exactly what the POTD files use: `###` headings, `**bold**`,
 * `` `code` ``, bullet and numbered lists, GFM tables, blockquotes, paragraphs,
 * and inline `$...$` / display `$$...$$` math.
 *
 * Math is pulled out before any markdown parsing and put back afterwards, so a
 * `|` in a matrix is never mistaken for a table cell and a leading `-` in an
 * equation is never mistaken for a list bullet. The delimiters survive into the
 * DOM as text, which is what KaTeX's auto-render needs to find them.
 */

const escapeHtml = (value) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/**
 * Replace math spans with inert placeholders, returning the spans separately.
 *
 * The marker carries its own delimiters and no whitespace, so `$x$.` comes back
 * as `x.` rather than `x .`. `@@` does not occur anywhere in the source files.
 */
const MATH_TOKEN = /@@MATH(\d+)@@/g

function extractMath(source) {
  const spans = []
  const text = source.replace(/\$\$[\s\S]*?\$\$|\$[^$\n]*\$/g, (span) => {
    spans.push(span)
    return `@@MATH${spans.length - 1}@@`
  })
  return { text, spans }
}

function restoreMath(html, spans) {
  return html.replace(MATH_TOKEN, (_, index) => escapeHtml(spans[Number(index)]))
}

/** Inline formatting, applied to already-escaped text. */
function inline(text) {
  return text
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
}

function renderTable(rows) {
  const cells = (row) =>
    row
      .trim()
      .replace(/^\|/, '')
      .replace(/\|$/, '')
      .split('|')
      .map((cell) => cell.trim())

  const head = cells(rows[0])
  const body = rows.slice(2).map(cells)
  const th = head.map((cell) => `<th>${inline(cell)}</th>`).join('')
  const tr = body
    .map((row) => `<tr>${row.map((cell) => `<td>${inline(cell)}</td>`).join('')}</tr>`)
    .join('')
  return `<div class="md-table-wrap"><table><thead><tr>${th}</tr></thead><tbody>${tr}</tbody></table></div>`
}

const isTableSeparator = (line) => /^\|?[\s:|-]*-[\s:|-]*\|?$/.test(line.trim())

const ONLY_MATH = /^@@MATH(\d+)@@$/

/** A line holding nothing but one `$$...$$` span is a standalone equation. */
const displayMathIndex = (line, spans) => {
  const match = line.match(ONLY_MATH)
  if (!match) return -1
  const at = Number(match[1])
  return spans[at] && spans[at].startsWith('$$') ? at : -1
}

const startsNewBlock = (line, spans) =>
  !line ||
  /^-{3,}$/.test(line) ||
  /^#{3,6}\s+/.test(line) ||
  /^[-*+]\s+/.test(line) ||
  /^\d+\.\s+/.test(line) ||
  line.startsWith('|') ||
  line.startsWith('&gt;') ||
  displayMathIndex(line, spans) !== -1

export function renderMarkdown(source) {
  if (!source) return ''

  const { text, spans } = extractMath(String(source).replace(/\r\n/g, '\n'))
  const lines = escapeHtml(text).split('\n')
  const out = []
  let index = 0

  while (index < lines.length) {
    const trimmed = lines[index].trim()

    if (!trimmed) {
      index += 1
      continue
    }

    // Horizontal rules separate sections in the source; the page supplies its
    // own spacing, so they are dropped rather than drawn.
    if (/^-{3,}$/.test(trimmed)) {
      index += 1
      continue
    }

    // A standalone display equation gets its own block, so a run of them is
    // spaced as separate equations instead of joined by line breaks.
    if (displayMathIndex(trimmed, spans) !== -1) {
      out.push(`<p class="md-display">${trimmed}</p>`)
      index += 1
      continue
    }

    const heading = trimmed.match(/^(#{3,6})\s+(.*)$/)
    if (heading) {
      const level = Math.min(heading[1].length, 6)
      out.push(`<h${level}>${inline(heading[2].trim())}</h${level}>`)
      index += 1
      continue
    }

    if (trimmed.startsWith('|') && index + 1 < lines.length && isTableSeparator(lines[index + 1])) {
      const rows = []
      while (index < lines.length && lines[index].trim().startsWith('|')) {
        rows.push(lines[index])
        index += 1
      }
      out.push(renderTable(rows))
      continue
    }

    if (/^[-*+]\s+/.test(trimmed)) {
      const items = []
      while (index < lines.length && /^[-*+]\s+/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^[-*+]\s+/, ''))
        index += 1
      }
      out.push(`<ul>${items.map((item) => `<li>${inline(item)}</li>`).join('')}</ul>`)
      continue
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      const items = []
      while (index < lines.length && /^\d+\.\s+/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^\d+\.\s+/, ''))
        index += 1
      }
      out.push(`<ol>${items.map((item) => `<li>${inline(item)}</li>`).join('')}</ol>`)
      continue
    }

    if (trimmed.startsWith('&gt;')) {
      const quoted = []
      while (index < lines.length && lines[index].trim().startsWith('&gt;')) {
        quoted.push(lines[index].trim().replace(/^&gt;\s?/, ''))
        index += 1
      }
      out.push(`<blockquote>${inline(quoted.join(' ')).trim()}</blockquote>`)
      continue
    }

    // Otherwise a paragraph: consecutive lines that do not open another block.
    const paragraph = []
    while (index < lines.length && !startsNewBlock(lines[index].trim(), spans)) {
      paragraph.push(lines[index].trim())
      index += 1
    }
    if (paragraph.length) out.push(`<p>${inline(paragraph.join('<br>'))}</p>`)
  }

  return restoreMath(out.join('\n'), spans)
}

export default renderMarkdown
