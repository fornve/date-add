# date-add-days

Dead simple date manipulation. A lightweight TypeScript utility library for 
common date operations with zero dependencies.

## Installation

```bash
npm install date-add-days
```

## Usage

Import the functions you need:

```typescript
import { addDays, endOfDay, toIsoDate } from 'date-add-days';

// Add 5 days to current date
const futureDate = addDays(new Date(), 5);
```

## API Reference

### `addDays(date: Date, days: number): Date`
Adds the specified number of days to a date, returning a new Date object.

```typescript
const nextWeek = addDays(new Date(), 7);
```

### `endOfDay(day: Date): Date`
Returns a Date object representing the last moment of the provided day (23:59:59.999).

```typescript
const dayEnd = endOfDay(new Date());
```

### `addHours(date: Date, hours: number): Date`
Adds the specified number of hours to a date. Supports fractional hours.

```typescript
const later = addHours(new Date(), 2.5); // Add 2 hours and 30 minutes
```

### `addMinutes(date: Date, minutes: number): Date`
Adds the specified number of minutes to a date. Supports fractional minutes.

```typescript
const soon = addMinutes(new Date(), 30);
```

### `addSeconds(date: Date, seconds: number): Date`
Adds the specified number of seconds to a date. Supports fractional seconds.

```typescript
const justAfter = addSeconds(new Date(), 45);
```

### `daysLeft(date: Date): number`
Calculates the number of whole days remaining between now and the specified date.

```typescript
const deadline = new Date('2025-12-31');
const remainingDays = daysLeft(deadline);
```

### `yesterday(): Date`
Returns a Date object representing yesterday's date.

```typescript
const yesterdayDate = yesterday();
```

### `toIsoDate(date: Date): string`
Converts a Date to ISO date string format (YYYY-MM-DD).

```typescript
const isoDate = toIsoDate(new Date()); // e.g. "2025-04-22"
```

### `toUnixTimestamp(date: Date): number`
Converts a Date object to a Unix timestamp (seconds since epoch).

```typescript
const timestamp = toUnixTimestamp(new Date());
```

## Examples

Working with upcoming events:

```typescript
import { addDays, daysLeft, toIsoDate } from 'date-add-days';

const eventDate = addDays(new Date(), 14);
console.log(`Event scheduled for: ${toIsoDate(eventDate)}`);
console.log(`${daysLeft(eventDate)} days remaining until the event`);
```

Time-based calculations:

```typescript
import { addHours, endOfDay, toUnixTimestamp } from 'date-add-days';

const current = new Date();
const meetingEnd = addHours(current, 1.5);
const dayEnding = endOfDay(current);

console.log(`Meeting ends at timestamp: ${toUnixTimestamp(meetingEnd)}`);
console.log(`Day ends at timestamp: ${toUnixTimestamp(dayEnding)}`);
```

## License

MIT
