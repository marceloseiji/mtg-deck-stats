import React from 'react'
import './styles/App.css'
import Home from 'components/Home'
import { GlobalProvider } from './contexts/GlobalContext'

const App = () => {
  return (
    <GlobalProvider>
      <Home />
    </GlobalProvider>
  )
}

export default App
