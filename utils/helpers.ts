import { logoToNameMap } from '~/store/skills'

/**
 * Returns the difference between the given date and current date.
 * @param  {int} year
 * @param  {int} month
 * @param  {int} date
 * @return {{year: int, month: int, day: int}}
 */
export const diffDate = (
  year: number,
  month: number,
  date: number
): { year: number; month: number; date: number } => {
  const now: number = new Date().getTime()
  const date_ms: number = new Date(year, month - 1, date).getTime()

  const diff: number = Math.abs(now - date_ms)
  const diffDate: Date = new Date(diff)

  const y: number = diffDate.getFullYear() - 1970 // date starts from 1 Jan 1970
  const m: number = diffDate.getMonth()
  const d: number = diffDate.getDate()

  return {
    year: y,
    month: m,
    date: d,
  }
}

/**
 * Returns the total height of the screen.
 * @return height: int
 */
export const getTotalHeight = (): number => {
  return Math.max(
    document.body.getBoundingClientRect().height,
    window.innerHeight
  )
}

/**
 * Returns the total width of the screen.
 * @return width: int
 */
export const getTotalWidth = (): number => {
  return Math.max(
    document.body.getBoundingClientRect().width,
    window.innerWidth
  )
}

/**
 * Returns the difference between the given date and current date.
 * @param  {int} logo
 * @return name: string
 */
export const logoToName = (logo) => logoToNameMap[logo] || ''
