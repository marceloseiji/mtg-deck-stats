import React, { createContext, useState, useEffect } from 'react'

const GlobalContext = createContext('Initial value')

const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={{}}>
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalProvider }
