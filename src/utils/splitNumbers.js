/* 
  This function transform a number in a arrays of numbers, it is used to transform each number
  in one led
*/
const splitNumbers = (numberToSplit) => {
  const arraySplittedNumbers = numberToSplit.toString().split('')
  const arrayRealNumbers = arraySplittedNumbers.map((number) => Number(number))
  return arrayRealNumbers
}
export default splitNumbers
