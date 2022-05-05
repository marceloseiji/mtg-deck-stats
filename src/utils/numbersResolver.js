/* 
  This function receives a number that is converted to an object, this object resolve
  what led should be turned on or off
*/
const numbersResolver = (displayNumber) => {
  switch (displayNumber) {
    case 0:
      return {
        one: true,
        two: true,
        three: true,
        four: true,
        five: true,
        six: true,
        seven: false
      }
      break
    case 1:
      return {
        one: false,
        two: true,
        three: true,
        four: false,
        five: false,
        six: false,
        seven: false
      }
      break
    case 2:
      return {
        one: true,
        two: true,
        three: false,
        four: true,
        five: true,
        six: false,
        seven: true
      }
      break
    case 3:
      return {
        one: true,
        two: true,
        three: true,
        four: true,
        five: false,
        six: false,
        seven: true
      }
      break
    case 4:
      return {
        one: false,
        two: true,
        three: true,
        four: false,
        five: false,
        six: true,
        seven: true
      }
      break
    case 5:
      return {
        one: true,
        two: false,
        three: true,
        four: true,
        five: false,
        six: true,
        seven: true
      }
      break
    case 6:
      return {
        one: true,
        two: false,
        three: true,
        four: true,
        five: true,
        six: true,
        seven: true
      }
      break
    case 7:
      return {
        one: true,
        two: true,
        three: true,
        four: false,
        five: false,
        six: false,
        seven: false
      }
      break
    case 8:
      return {
        one: true,
        two: true,
        three: true,
        four: true,
        five: true,
        six: true,
        seven: true
      }
      break
    case 9:
      return {
        one: true,
        two: true,
        three: true,
        four: true,
        five: false,
        six: true,
        seven: true
      }
      break
    default:
      return {
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false,
        seven: false
      }
      break
  }
}

export default numbersResolver
