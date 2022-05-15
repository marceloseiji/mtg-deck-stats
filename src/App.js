import React from 'react'
import { GlobalProvider } from './contexts/GlobalContext'
import { CollectionProvider } from './contexts/CollectionContext'
import AppRouter from 'routers/AppRouter'

const App = () => {
  return (
    <GlobalProvider>
      <CollectionProvider>
        <AppRouter />
      </CollectionProvider>
    </GlobalProvider>
  )
}

export default App
