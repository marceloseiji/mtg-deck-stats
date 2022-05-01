import React, { useState, useEffect, useContext } from 'react'
import './styles.css'
import { NumbersContext } from 'contexts/NumbersContext'

const DisplayControls = () => {
  const { handleUserNumber } = useContext(NumbersContext)
  const [numberEntered, setNumberEntedered] = useState('')

  const handleEnteredNumber = (event) => {
    if (event.target.value < 1000 && event.target.value > -1) {
      setNumberEntedered(event.target.value)
    }
  }

  const handleSetContextNumber = () => {
    if (numberEntered) {
      handleUserNumber(numberEntered)
      setNumberEntedered('')
    }
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
        <button disabled={!numberEntered} onClick={handleSetContextNumber}>
          ENVIAR
        </button>
      </div>
    </>
  )
}

export default DisplayControls
