import React, { createContext, useState, useEffect } from 'react'

const CollectionContext = createContext([])

const CollectionProvider = ({ children }) => {
  const [myCollection, setMyCollection] = useState([])

  useEffect(() => {
    console.log(myCollection)
  }, [myCollection])

  return (
    <CollectionContext.Provider
      value={{
        myCollection,
        setMyCollection
      }}
    >
      {children}
    </CollectionContext.Provider>
  )
}

export { CollectionContext, CollectionProvider }
