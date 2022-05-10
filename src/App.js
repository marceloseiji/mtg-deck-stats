import React from 'react'
import Home from 'components/Home'
import { GlobalProvider } from './contexts/GlobalContext'
import AppRouter from 'routers/AppRouter'

const App = () => {
  return (
    <GlobalProvider>
      <AppRouter />
    </GlobalProvider>
  )
}

export default App
