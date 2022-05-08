import React from 'react'
import './styles/App.css'
import Display from 'components/Display'
import { GlobalProvider } from './contexts/GlobalContext'

const App = () => {
  return (
    <GlobalProvider>
      <Display />
    </GlobalProvider>
  )
}

export default App
