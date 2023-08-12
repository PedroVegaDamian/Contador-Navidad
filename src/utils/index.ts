export const formatNumberCounter = (number: number) =>
  number < 10 ? `0${number}` : number.toString();

export const parseStringToDate = (dateToParse: string) => {
  const dateArray = dateToParse.split("/");
  const dateShortFormat = [dateArray[1], dateArray[0], dateArray[2]].join("/");
  return new Date(dateShortFormat);
};
