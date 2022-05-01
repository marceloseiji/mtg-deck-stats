import React, { useState, useEffect, useContext } from 'react'
import './styles.css'
import { NumbersContext } from 'contexts/NumbersContext'
import ReplayIcon from 'assets/icons/ReplayIcon'

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
    <div className="displayControls">
      <div className="displayControls__wrapper_button">
        <button className="displayControls__button">
          <ReplayIcon />
          <span className="displayControls__button__text">NOVA PARTIDA</span>
        </button>
      </div>
      <div className="displayControls__wrapper__entryNumber">
        <input
          className="displayControls_number_input"
          type="number"
          value={numberEntered}
          onChange={(event) => handleEnteredNumber(event)}
        />
        <button
          className="displayControls__sendButton"
          disabled={!numberEntered}
          onClick={handleSetContextNumber}
        >
          ENVIAR
        </button>
      </div>
    </div>
  )
}

export default DisplayControls
