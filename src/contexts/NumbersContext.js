import React, { createContext, useState } from 'react'

const NumbersContext = createContext('Initial value')

const NumbersProvider = ({ children }) => {
  return (
    <NumbersContext.Provider value="here">{children}</NumbersContext.Provider>
  )
}

export { NumbersProvider, NumbersContext }
