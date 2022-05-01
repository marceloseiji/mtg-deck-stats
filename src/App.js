import React from 'react'
import './styles/App.css'
import Display from 'components/Display'
import DisplayLed from 'components/DisplayLed'

const App = () => {
  return (
    <div className="display">
      <Display />
      <DisplayLed />
    </div>
  )
}

export default App
