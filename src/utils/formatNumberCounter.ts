const formatNumberCounter = (number: number) =>
  number < 10 ? `0${number}` : number.toString()

export default formatNumberCounter
