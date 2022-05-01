import React, { useContext } from 'react'
import './styles.css'
import { NumbersContext } from 'contexts/NumbersContext'

const DisplayControls = () => {
  const number = useContext(NumbersContext)
  console.log('context: ', number)
  return (
    <>
      <div>
        <button>NOVA PARTIDA</button>
      </div>
      <div className="entryNumber">
        <input type="number" />
        <button>ENVIAR</button>
      </div>
    </>
  )
}

export default DisplayControls
