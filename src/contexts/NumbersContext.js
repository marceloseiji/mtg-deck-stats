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

  // Get the initial number from services
  useEffect(async () => {
    const numberRequest = await getNumber()
    if (numberRequest.value) {
      const { value } = numberRequest
      setFetchedNumber(value)
    } else {
      const { StatusCode } = numberRequest
      // Set status error number like it was entered by user
      setErrorNumber(splitNumbers(StatusCode))
      setMessage({ text: 'Erro', color: 'message_error' })
      return
    }
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
      console.log('verificando')
      console.log(userEnteredNumberToCompare, fetchedNumber)
      switch (true) {
        case userEnteredNumberToCompare === fetchedNumber:
          setMessage({ text: 'Você acertou!!!', color: 'message_success' })
          break
        case userEnteredNumberToCompare > fetchedNumber:
          setMessage({ text: 'É maior', color: 'message_warning' })
          break
        case userEnteredNumberToCompare < fetchedNumber:
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

  return (
    <NumbersContext.Provider
      value={{
        arrayNumbers,
        handleUserNumber,
        userEnteredNumber,
        message,
        errorNumber
      }}
    >
      {children}
    </NumbersContext.Provider>
  )
}

export { NumbersProvider, NumbersContext }
