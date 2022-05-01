const splitNumbers = (numberToSplit) => {
  const arraySplittedNumbers = numberToSplit.toString().split('')
  const arrayRealNumbers = arraySplittedNumbers.map((number) => Number(number))
  return arrayRealNumbers
}
export default splitNumbers
