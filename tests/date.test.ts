import { addDays, addHours, addMinutes, addSeconds, daysLeft, endOfDay, toIsoDate, toUnixTimestamp, yesterday } from '../date'
describe('date-simple', () => {
  it('addDays should be a function', () => {
    expect(addDays).toBeInstanceOf(Function)
  })

  it('addDays should add days', () => {
    const date = new Date("2025-01-01")
    const newDate = addDays(date, 1)
    expect(newDate).toBeInstanceOf(Date)
    expect(newDate.getTime()).toBe(new Date("2025-01-02").getTime())
  })

  it('addDays should remove days', () => {
    const date = new Date("2025-01-01")
    const newDate = addDays(date, -1)
    expect(newDate).toBeInstanceOf(Date)
    expect(newDate.getTime()).toBe(new Date("2024-12-31").getTime())
  })
  
  it('should add hours', () => {
    const date = new Date("2025-01-01")
    const newDate = addHours(date, 1)
    expect(newDate).toBeInstanceOf(Date)
    expect(newDate.getTime()).toBe(new Date("2025-01-01T01:00:00.000Z").getTime())
  })
  
  it('should add seconds', () => {
    const date = new Date("2025-01-01 00:00:00")
    const checkTime = new Date("2025-01-01 00:01:20")
    const newDate = addSeconds(date, 80)
    expect(newDate).toBeInstanceOf(Date)
    expect(newDate.getTime()).toBe(checkTime.getTime())
  })
  
  it('should add minutes', () => {
    const date = new Date("2025-01-01 00:00:00")
    const checkTime = new Date("2025-01-01 00:12:00")
    const newDate = addMinutes(date, 12)
    expect(newDate).toBeInstanceOf(Date)
    expect(newDate.toISOString()).toBe(checkTime.toISOString())
    expect(newDate.getTime()).toBe(checkTime.getTime())
  })

  it('yesterday should return day - 1 date', () => {
    const date = yesterday()
    const newDate = addDays(date, 1)
    expect(newDate).toBeInstanceOf(Date)
    expect(toIsoDate(newDate)).toBe(toIsoDate(new Date()))
  })

  it('endOfDay should return date one second before midnight', () => {
    const date = new Date("2025-01-01")
    const newDate = endOfDay(date)
    expect(newDate).toBeInstanceOf(Date)
    expect(newDate.getTime()).toBe(new Date("2025-01-01T23:59:59.000Z").getTime())
  })

  it('daysLeft should return number of days left', () => {
    const date = addDays(new Date(), 10)
    const remainingDays = daysLeft(date)
    expect(remainingDays).toBe(10)
  })

  it('toIsoDate should return ISO date', () => {
    const date = new Date("2025-01-01")
    const isoDate = toIsoDate(date)
    expect(isoDate).toBe("2025-01-01")
  })

  it('toUnixTimestamp should return unix timestamp', () => {
    const date = new Date("2025-01-01")
    const timestamp = toUnixTimestamp(date)
    expect(timestamp).toBe(1735689600)
  })
  
})