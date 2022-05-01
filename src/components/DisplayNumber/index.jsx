import React, { useState, useEffect } from 'react'
import './styles.css'
import DisplayLed from 'components/DisplayLed'
import getNumber from 'services/getNumber'
import splitNumbers from 'utils/splitNumbers'

const DisplayNumbers = () => {
  const [fetchedNumber, setFetchedNumber] = useState(null)
  const [arrayNumbers, setArrayNumbers] = useState([])
  const [error, setError] = useState(false)

  useEffect(async () => {
    const numberRequest = await getNumber()

    if (numberRequest.value) {
      const { value } = numberRequest
      setFetchedNumber(value)
    } else {
      console.log('an error ocurred: ', numberRequest)
      const { StatusCode } = numberRequest
      setFetchedNumber(StatusCode)
      setError(true)
    }
  }, [])

  useEffect(async () => {
    if (fetchedNumber) {
      setArrayNumbers(splitNumbers(fetchedNumber))
    }
  }, [fetchedNumber])

  useEffect(async () => {
    if (arrayNumbers) {
      console.log(arrayNumbers)
    }
  }, [arrayNumbers])

  return (
    <>
      <div className="displayNumbers">
        {error && <h2 className="error">ERRO</h2>}
        <div className="displayNumbers__center">
          {arrayNumbers.map((number, index) => (
            <DisplayLed key={index} showNumber={number} error={error} />
          ))}
        </div>
      </div>
    </>
  )
}

export default DisplayNumbers
