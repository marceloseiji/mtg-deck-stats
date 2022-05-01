import React, { useState, useEffect, useContext } from 'react'
import './styles.css'
import DisplayLed from 'components/DisplayLed'
import { NumbersContext } from 'contexts/NumbersContext'

const DisplayNumbers = () => {
  const { error, userEnteredNumber } = useContext(NumbersContext)
  return (
    <>
      <div className="displayNumbers">
        {error && <h2 className="error">ERRO</h2>}
        <div className="displayNumbers__center">
          {userEnteredNumber.map((number, index) => (
            <DisplayLed key={index} showNumber={number} error={error} />
          ))}
        </div>
      </div>
    </>
  )
}

export default DisplayNumbers
