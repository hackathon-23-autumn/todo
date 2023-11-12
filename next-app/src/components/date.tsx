import { parseISO, format, isToday, weeksToDays } from "date-fns"

const Date = () => {
  const date = parseISO("2023-11-04T00:00:00")
  return format(date, "LLLL d, yyyy")
}

export default Date
