export const formatNumberCounter = (number: number) =>
  number < 10 ? `0${number}` : number.toString()

export const parseStringToDate = (dateToParse: string) => {
  const [day, month, year] = dateToParse.split('/')
  const dateShortFormat = [month, day, year].join('/')
  return new Date(dateShortFormat)
}

export const datesGap = (currentYear: number) =>
  parseStringToDate(`25/12/${currentYear}`).getTime() - new Date().getTime()
