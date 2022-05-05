import React, { useState, useEffect, useContext } from 'react'
import './styles.css'
import DisplayLed from 'components/DisplayLed'
import { NumbersContext } from 'contexts/NumbersContext'

/*
  This component uses numberMap these are the numbers typed by user transformed in
  a array converted by numbersResolver
*/

const DisplayNumbers = () => {
  const { message, numberMap } = useContext(NumbersContext)
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
