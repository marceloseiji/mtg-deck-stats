import React from 'react'
import './styles/App.css'
import Display from 'components/Display'
import { NumbersProvider } from './contexts/NumbersContext'

const App = () => {
  return (
    <NumbersProvider>
      <div className="display">
        <Display />
      </div>
    </NumbersProvider>
  )
}

export default App
