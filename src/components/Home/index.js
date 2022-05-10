import React, { useEffect, useState } from 'react'
import Cards from 'services/Cards'

const Home = () => {
  const [fetchedCardInfos, setFetchedCardInfos] = useState('')
  const [inputTyped, setInputTyped] = useState('')

  const getCardsByName = async () => {
    const { data } = await Cards.withName(inputTyped)
    setFetchedCardInfos(data)
  }

  const handleInputValue = (value) => {
    setInputTyped(value)
  }

  const testButton = (name) => {
    console.log(name)
  }

  useEffect(() => {
    if (inputTyped.length > 2) {
      let executeAfterTimeOut = setTimeout(() => {
        getCardsByName(inputTyped)
      }, [1000])

      return () => {
        clearTimeout(executeAfterTimeOut)
      }
    }
  }, [inputTyped])

  return (
    <>
      <h1>Cards</h1>
      <input
        autoComplete="off"
        type="text"
        placeholder="Enter card name..."
        value={inputTyped}
        onChange={(event) => handleInputValue(event.target.value)}
      />
      {fetchedCardInfos &&
        fetchedCardInfos.map((card, index) => (
          <span onClick={testButton(card.name)} key={index}>
            {card.name}
          </span>
        ))}
    </>
  )
}

export default Home
