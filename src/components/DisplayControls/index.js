import React from 'react'
import './styles.css'

const DisplayControls = () => {
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
