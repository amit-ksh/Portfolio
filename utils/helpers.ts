import { logoToNameMap } from '~/store/skills'
import resolveConfig from 'tailwindcss/resolveConfig'

import tailwindConfig from '../tailwind.config.ts'

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
  return Math.floor(
    Math.max(document.body.getBoundingClientRect().height, window.innerHeight)
  )
}

/**
 * Returns the total width of the screen.
 * @return width: int
 */
export const getTotalWidth = (): number => {
  return Math.floor(
    Math.max(document.body.getBoundingClientRect().width, window.innerWidth)
  )
}

/**
 * Returns the difference between the given date and current date.
 * @param  {int} logo
 * @return name: string
 */
export const logoToName = (logo: string) => logoToNameMap[logo] || ''

/**
 * Disables the scrolling of the webpage
 * @returns void
 */
export const disableScroll = () => {
  if (!document) return

  document.body.style.overflow = 'hidden'
}

/**
 * Enables the scrolling of the webpage
 * @returns void
 */
export const enableScroll = () => {
  if (!document) return

  document.body.style.overflow = 'visible'
}

/**
 *
 * Find out if a tailwind screen value matches the current window
 *
 * @param {string} screen
 *
 * @return {Object|Boolean}
 */
export const screenIs = (screen = '') => {
  if (!window) return

  // "Theme" is an alias to where you keep your tailwind.config.js - most likely your project root
  const screens = resolveConfig(tailwindConfig).theme?.screens || []

  // create a keyed object of screens that match
  const matches = Object.entries(screens).reduce(
    (results: Record<string, boolean>, [name, size]) => {
      const mediaQuery =
        typeof size === 'string'
          ? `(min-width: ${size})`
          : `(max-width: ${size.max})`

      results[name] = window.matchMedia(mediaQuery).matches

      return results
    },
    {}
  )

  // show all matches when there is no screen choice
  if (screen === '') {
    return matches
  }

  // invalid screen choice
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (!screens[screen]) {
    console.error(`No match for "${screen}"`)

    return false
  }

  return matches[screen]
}

/**
 *
 * Check whether the str is URL or not.
 *
 * @param {string} str
 *
 * @return {Boolean}
 */
export function isValidURL(str: string) {
  const res = str.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  )
  return res !== null
}
