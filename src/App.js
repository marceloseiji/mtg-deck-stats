import React from 'react'
import AppRouter from 'routers/AppRouter'
import { GlobalProvider } from './contexts/GlobalContext'

const App = () => {
  return (
    <GlobalProvider>
      <AppRouter />
    </GlobalProvider>
  )
}

export default App
