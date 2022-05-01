import React from 'react'
import './styles.css'
import DisplayNumbers from 'components/DisplayNumber'

const Display = () => {
  return (
    <>
      <div className="display__title">
        <h1 className="display__title__text">QUAL É O NÚMERO?</h1>
        <hr className="display__title__line" />
      </div>
      <DisplayNumbers />
    </>
  )
}

export default Display
