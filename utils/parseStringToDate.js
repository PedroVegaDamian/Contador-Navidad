const parseStringToDate = dateToParse => {
  const dateArray = dateToParse.split('/')
  const dateShortFormat = [dateArray[1], dateArray[0], dateArray[2]].join('/')
  return new Date(dateShortFormat)
}

export default parseStringToDate
