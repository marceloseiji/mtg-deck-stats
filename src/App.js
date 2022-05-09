import React from 'react'
import Home from 'components/Home'
import { GlobalProvider } from './contexts/GlobalContext'
import 'normalize.css'
import './styles/GlobalStyle.css'

const App = () => {
  return (
    <GlobalProvider>
      <Home />
    </GlobalProvider>
  )
}

export default App
