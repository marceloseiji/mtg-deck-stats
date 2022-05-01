import React, { useState, useEffect } from 'react'
import './styles.css'
import DisplayLed from 'components/DisplayLed'
import getNumber from 'services/getNumber'
import splitNumbers from 'utils/splitNumbers'

const DisplayNumbers = () => {
  const [fetchedNumber, setFetchedNumber] = useState(null)
  const [arrayNumbers, setArrayNumbers] = useState([])

  useEffect(async () => {
    const numberRequest = await getNumber()

    if (numberRequest.value) {
      const { value } = numberRequest
      setFetchedNumber(value)
    } else {
      console.log('an error ocurred: ', numberRequest)
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
    <div className="displayNumbers">
      {arrayNumbers.map((number, index) => (
        <DisplayLed key={index} showNumber={number} />
      ))}
    </div>
  )
}

export default DisplayNumbers
