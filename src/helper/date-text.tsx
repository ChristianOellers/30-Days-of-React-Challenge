/**
 * Render text from a given date.
 */
const dateText = (date: Date): string => {
  const text: string = new Intl.DateTimeFormat('en-US').format(date)

  return `Date: ${text}`
}


export default dateText

