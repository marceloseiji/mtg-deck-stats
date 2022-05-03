import React, { createContext, useState, useEffect } from 'react'
import getNumber from 'services/getNumber'
import splitNumbers from 'utils/splitNumbers'

const NumbersContext = createContext('Initial value')

const NumbersProvider = ({ children }) => {
  // First render
  const [firstRender, setFirstRender] = useState(true)
  // Fetch initial number state
  const [fetchedNumber, setFetchedNumber] = useState(null)
  const [arrayNumbers, setArrayNumbers] = useState([])
  // Entered number states
  const [userEnteredNumber, setUserEnteredNumber] = useState([1000])
  const [userEnteredNumberToCompare, setUserEnteredNumberToCompare] = useState([
    1000
  ])
  const [errorNumber, setErrorNumber] = useState()
  // Message text and color states
  const [message, setMessage] = useState({ text: '', color: '' })
  // ResetGame button visbility state
  const [resetVisibility, setResetVisibility] = useState(false)
  // Number to map on DisplayNumbers
  const [numberMap, setNumberMap] = useState([])

  // Function to Fetch initial number
  const fetchNumber = async () => {
    const numberRequest = await getNumber()
    if (numberRequest.value) {
      const { value } = numberRequest
      setFetchedNumber(value)
    } else {
      const { StatusCode } = numberRequest
      // Set status error number like it was entered by user
      setErrorNumber(splitNumbers(StatusCode))
      setMessage({ text: 'Erro', color: 'message_error' })
      setResetVisibility(true)
      return
    }
  }

  // Set the Array of numbers that will be displayed on DisplayNumbers component
  useEffect(() => {
    setNumberMap(errorNumber ? errorNumber : userEnteredNumber)
  }, [userEnteredNumber])

  // Set the Array of numbers to be displayed on DisplayNumbers component
  useEffect(() => {
    setNumberMap(errorNumber ? errorNumber : userEnteredNumber)
  }, [errorNumber])

  // Get the initial number from services on render component
  useEffect(async () => {
    fetchNumber()
  }, [])

  // Resolve number from services to a array
  useEffect(async () => {
    if (fetchedNumber) {
      setArrayNumbers(splitNumbers(fetchedNumber))
    }
  }, [fetchedNumber])

  // Verify userEnteredNumber x fetchedNumber
  useEffect(() => {
    if (firstRender) {
      setFirstRender(false)
    } else {
      switch (true) {
        case userEnteredNumberToCompare === fetchedNumber:
          setMessage({ text: 'Você acertou!!!', color: 'message_success' })
          setResetVisibility(true)
          break
        case userEnteredNumberToCompare < fetchedNumber:
          setMessage({ text: 'É maior', color: 'message_warning' })
          break
        case userEnteredNumberToCompare > fetchedNumber &&
          userEnteredNumberToCompare >= 0:
          setMessage({ text: 'É menor', color: 'message_warning' })
          break
        default:
          break
      }
    }
  }, [userEnteredNumber])

  // Callback to get user entered number
  const handleUserNumber = (userNumber) => {
    setUserEnteredNumberToCompare(Number(userNumber))
    setUserEnteredNumber(splitNumbers(userNumber))
  }

  // Reset the game
  const handleResetGame = () => {
    setUserEnteredNumberToCompare(-1)
    setNumberMap([1000])
    setErrorNumber('')
    setUserEnteredNumber([1000])
    fetchNumber()
    setResetVisibility(false)
    setMessage({ text: '', color: '' })
  }

  return (
    <NumbersContext.Provider
      value={{
        arrayNumbers,
        handleUserNumber,
        userEnteredNumber,
        message,
        errorNumber,
        handleResetGame,
        resetVisibility,
        numberMap,
        setNumberMap
      }}
    >
      {children}
    </NumbersContext.Provider>
  )
}

export { NumbersProvider, NumbersContext }
