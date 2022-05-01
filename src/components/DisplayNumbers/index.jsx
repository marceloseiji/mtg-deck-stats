import React, { useState, useEffect, useContext } from 'react'
import './styles.css'
import DisplayLed from 'components/DisplayLed'
import { NumbersContext } from 'contexts/NumbersContext'

const DisplayNumbers = () => {
  const { message, userEnteredNumber, errorNumber } = useContext(NumbersContext)
  const [numberMap, setNumberMap] = useState([])

  useEffect(() => {
    setNumberMap(errorNumber ? errorNumber : userEnteredNumber)
  }, [userEnteredNumber, errorNumber])

  return (
    <>
      <div className="displayNumbers">
        {message && (
          <h2 className={`displayNumbers__message ${message.color}`}>
            {message.text}
          </h2>
        )}
        <div className="displayNumbers__center">
          {numberMap.map((number, index) => (
            <DisplayLed key={index} showNumber={number} />
          ))}
        </div>
      </div>
    </>
  )
}

export default DisplayNumbers
