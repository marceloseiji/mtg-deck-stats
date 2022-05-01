import React, { useState, useEffect, useContext } from 'react'
import './styles.css'
import { NumbersContext } from 'contexts/NumbersContext'

const DisplayControls = () => {
  const number = useContext(NumbersContext)
  const [numberEntered, setNumberEntedered] = useState()

  const handleEnteredNumber = (event) => {
    setNumberEntedered(event.target.value)
  }

  const handleSetContextNumber = () => {
    setNumberEntedered('')
  }

  return (
    <>
      <div>
        <button>NOVA PARTIDA</button>
      </div>
      <div className="entryNumber">
        <input
          type="number"
          value={numberEntered}
          onChange={(event) => handleEnteredNumber(event)}
        />
        <button onClick={handleSetContextNumber}>ENVIAR</button>
      </div>
    </>
  )
}

export default DisplayControls
