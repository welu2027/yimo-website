# Problem of the Day sync

`scripts/sync-potd.js` reads the POTD Google Drive folder and writes
`data/potd.json`. `.github/workflows/sync-potd.yml` runs it nightly and commits
the result, which triggers the existing `cd` workflow, so the problems are baked
into the generated site. Visitors' browsers never call Drive.

## Configuration

Everything is read from the environment. **No credential is stored in this
repository, and none should ever be committed.**

| Variable | Required | Purpose |
| --- | --- | --- |
| `GOOGLE_API_KEY` | yes (or a token) | API key for the Drive API. Works when the folder is shared "anyone with the link can view". |
| `GOOGLE_ACCESS_TOKEN` | alternative | OAuth bearer token. Use instead of the key if the folder must stay private. Takes precedence. |
| `POTD_FOLDER_ID` | no | Overrides the Drive folder. Defaults to the folder the contest uses. |
| `POTD_TODAY` | no | Overrides today's date as `YYYY-MM-DD`. Testing only. |

In GitHub, these live in **Settings → Secrets and variables → Actions**. The
workflow reads `secrets.GOOGLE_API_KEY` and `secrets.GOOGLE_ACCESS_TOKEN`.

### Creating the API key

1. <https://console.cloud.google.com> → APIs & Services → Library → enable
   **Google Drive API**.
2. Credentials → Create credentials → **API key**.
3. Restrict it: Application restrictions → none needed; **API restrictions →
   Google Drive API**. This caps what an exposed key could ever reach.
4. Add it as the `GOOGLE_API_KEY` repository secret.

A key is an identity for your Google Cloud project, not a permission on the
folder — treat it as a credential even though the folder is public, and rotate
it if it is ever pasted somewhere it should not be.

## Running it

```sh
GOOGLE_API_KEY=... node scripts/sync-potd.js            # write data/potd.json
GOOGLE_API_KEY=... node scripts/sync-potd.js --dry-run  # report changes, write nothing
GOOGLE_API_KEY=... node scripts/sync-potd.js --list     # folder inventory, parse nothing
```

`--list` is also available from the Actions tab: run the `sync-potd` workflow
manually and choose mode `list`. Use it when the folder layout changes and the
parser needs to be checked.

On Node 22+ behind an HTTP proxy, prefix with `NODE_USE_ENV_PROXY=1` — Node's
built-in `fetch` ignores `HTTPS_PROXY` otherwise.

## What gets published

Each source file is `POTD_YYYY-MM-DD_DIVn.md` with `## Problem`, `## Answer`,
`## Solution` and `## Notes` sections.

- **Problem** → the index card at `/potd` and the problem page.
- **Answer** and **Solution** → the problem page at `/potd/<date>-div<n>`.
- **Notes** → **not synced.** In this folder the notes are the authors'
  internal calibration log, naming individual solvers and their times, and
  `data/potd.json` is committed to a public repo. See the comment in
  `parseMarkdownProblem` to change that.

Two safeguards worth knowing:

- Problems dated after today are withheld entirely, so upcoming problems cannot
  leak early through the page source or the committed JSON.
- If answer or solution material is ever found inside a `## Problem` section,
  that entry is rejected rather than published.
