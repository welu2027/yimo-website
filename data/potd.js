/**
 * Problem of the Day archive.
 *
 * The entries live in `potd.json`, which is written by `scripts/sync-potd.js`
 * from the shared Google Drive folder and refreshed daily by the
 * `sync-potd` GitHub Actions workflow. Treat that file as generated: hand
 * edits survive only until the next sync run. To change a problem, change it
 * in Drive.
 *
 * Because the sync commits the JSON and the site is statically generated, the
 * problems are baked into the build - visitors' browsers never talk to Drive.
 *
 * Entry shape:
 *   division: 1 or 2
 *   date:     ISO `YYYY-MM-DD` (rendered as e.g. "August 7, 2026")
 *   problem:  problem statement; inline math goes between single dollar signs
 *             and is rendered with KaTeX. In JSON every backslash must be
 *             escaped, so `\frac` is written `\\frac`.
 */
import problems from './potd.json'

export default problems
