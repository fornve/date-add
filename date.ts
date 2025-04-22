/**
 * @param {Date object} date Date to add days to
 * @param {integer} days Number of days to be added
 * @return Date object
 */
export const addDays = (date: Date, days: number): Date => {
  return new Date(date.setDate(date.getDate() + days))
}

/**
 * @param {Date object} Date that we need to get end of the day
 * @return Date object one second before midnight
 */
export const endOfDay = (day: Date): Date => {
  return new Date((addDays(day, 1)).getTime() - 1000)
}

/**
 * @param {Date object} date
 * @param {number} hours Number of hours (integer of float) to be added to date
 * @returns Date Object
 */
export const addHours = (date: Date, hours: number): Date => {
  return addSeconds(date, hours * 60 * 60)
}

/**
 * @param {Date object} date 
 * @param {number} minutes Number of minutes (integer of float) to be added to date
 * @returns Date Object
 */
export const addMinutes = (date: Date, minutes: number): Date => {
  return addSeconds(date, minutes * 60)
}

/**
 * @param {Date object} date
 * @param {number} seconds Number of seconds (integer of float) to be added to date
 * @returns Date Object
 */
export const addSeconds = (date: Date, seconds: number): Date => {
  return new Date((date.getTime() + (seconds * 1000)))
}

/**
 * @param {Date object} date
 * @returns Number of days left
 */ 
export const daysLeft = (date: Date): number => {
  return Math.floor((date.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
}

/**
 * @returns Date object
 */
export const yesterday = (): Date => {
  return addDays(new Date(), -1)
}

/**
 * @param {Date object} date Date to convert to ISO date
 * @returns ISO date string
 */
export const toIsoDate = (date: Date): string => {
  return date.toISOString().substring(0, 10)
}

/**
 * @param {Date object} date It would be wrapped in new Date()
 * @return Unix Timestamp (Not Javascript Timestamp)
 */
export const toUnixTimestamp = (date: Date): number => {
  return Math.round(date.getTime() / 1000)
}