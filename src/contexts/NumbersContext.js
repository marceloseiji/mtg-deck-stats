import React, { createContext, useState, useEffect } from 'react'
import getNumber from 'services/getNumber'
import splitNumbers from 'utils/splitNumbers'

const NumbersContext = createContext('Initial value')

const NumbersProvider = ({ children }) => {
  // Fetch initial number state
  const [fetchedNumber, setFetchedNumber] = useState(null)
  const [arrayNumbers, setArrayNumbers] = useState([])
  const [error, setError] = useState(false)

  // Entered number state
  const [userEnteredNumber, setUserEnteredNumber] = useState([1000])

  // Get the initial number from services
  useEffect(async () => {
    const numberRequest = await getNumber()
    if (numberRequest.value) {
      const { value } = numberRequest
      setFetchedNumber(value)
    } else {
      const { StatusCode } = numberRequest
      // Set status error number like it was entered by user
      setUserEnteredNumber(splitNumbers(StatusCode))
      setError(true)
    }
  }, [])

  // Resolve number from services to a array
  useEffect(async () => {
    if (fetchedNumber) {
      setArrayNumbers(splitNumbers(fetchedNumber))
    }
  }, [fetchedNumber])

  // Callback to get user entered number
  const handleUserNumber = (userNumber) => {
    setUserEnteredNumber(splitNumbers(userNumber))
  }

  return (
    <NumbersContext.Provider
      value={{ arrayNumbers, error, handleUserNumber, userEnteredNumber }}
    >
      {children}
    </NumbersContext.Provider>
  )
}

export { NumbersProvider, NumbersContext }
