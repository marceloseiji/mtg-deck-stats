import React, { useState, useContext } from 'react'
import './styles.css'
import { NumbersContext } from 'contexts/NumbersContext'
import ReplayIcon from 'assets/icons/ReplayIcon'

const DisplayControls = () => {
  const { handleUserNumber, handleResetGame, resetVisibility, message } =
    useContext(NumbersContext)
  const [numberEntered, setNumberEntedered] = useState('')
  const buttonColorDisabled = !numberEntered && 'disabled'
  const inputDisabled = message.text === 'Erro' ? 'disabled' : null

  const handleEnteredNumber = (event) => {
    if (
      event.target.value > -1 &&
      event.target.value.length < 4
    ) {
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
        {resetVisibility && (
          <button className="displayControls__button" onClick={handleResetGame}>
            <ReplayIcon />
            <span className="displayControls__button__text">NOVA PARTIDA</span>
          </button>
        )}
      </div>
      <div className="displayControls__wrapper__entryNumber">
        <input
          className={`displayControls_number_input ${inputDisabled}`}
          type="number"
          value={numberEntered}
          onChange={(event) => handleEnteredNumber(event)}
          disabled={inputDisabled}
        />
        <button
          className={`displayControls__sendButton ${buttonColorDisabled}`}
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
