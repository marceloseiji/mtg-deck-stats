import React from 'react'
import './styles.css'
import DisplayNumbers from 'components/DisplayNumbers'
import DisplayControls from 'components/DisplayControls'

const Display = () => {
  return (
    <div className="display">
      <div className="display__title">
        <h1 className="display__title__text">QUAL É O NÚMERO?</h1>
        <hr className="display__title__line" />
      </div>
      <DisplayNumbers />
      <DisplayControls />
    </div>
  )
}

export default Display
