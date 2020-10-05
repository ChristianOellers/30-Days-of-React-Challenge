/**
 * Render text from a given date.
 *
 * @todo Localization should be defined for the full app instead here
 */
const dateText = (date: Date): string => {
  const text: string = new Intl.DateTimeFormat('en-US').format(date)

  return `Date: ${text}`
}


export default dateText

