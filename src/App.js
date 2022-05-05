import React from 'react'
import './styles/App.css'
import Display from 'components/Display'
import { NumbersProvider } from './contexts/NumbersContext'

const App = () => {
  return (
    <NumbersProvider>
      <Display />
    </NumbersProvider>
  )
}

export default App
