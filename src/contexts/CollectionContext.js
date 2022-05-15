import React, { createContext, useState, useEffect } from 'react'

const CollectionContext = createContext([])

const CollectionProvider = ({ children }) => {
  const [myCollection, setMyCollection] = useState([])
  return (
    <CollectionContext.Provider
      value={{
        setMyCollection
      }}
    >
      {children}
    </CollectionContext.Provider>
  )
}

export { CollectionContext, CollectionProvider }
