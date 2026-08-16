import renderMathInElement from 'katex/dist/contrib/auto-render.js'

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

/**
 * "2026-08-07" -> "August 7, 2026".
 *
 * Split by hand: `new Date('2026-08-07')` parses as UTC and shifts a day back
 * for viewers west of Greenwich.
 */
export function formatDate(date) {
  const [year, month, day] = String(date).split('-').map(Number)
  return `${MONTHS[month - 1]} ${day}, ${year}`
}

/** Typeset every `$...$` and `$$...$$` span inside an element. */
export function renderMathIn(element) {
  if (!element || typeof element.querySelectorAll !== 'function') return
  renderMathInElement(element, {
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '$', right: '$', display: false },
    ],
    throwOnError: false,
  })
}
