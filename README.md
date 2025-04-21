# date-add


## Example

```js
const { addDays, addHours, endOfDay, yesterday } from "date-add"

const tomorrow = addDays(new Date(), 1)
const today = addDays(tomorrow, -1)
const yesterdayDate = yesterday()
const afterOneHour = addHours(new Date(), 1)
const secondBeforeMidnightTomorrow = endOfDay(addDays(new Date(), 1))
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`
