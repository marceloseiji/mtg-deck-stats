import React, { useEffect, useState } from 'react'
import Cards from 'services/Cards'
import { Button } from 'antd'

const Decks = () => {
  const [fetchedCardInfos, setFetchedCardInfos] = useState('')
  const [inputTyped, setInputTyped] = useState('')

  const getCardsByName = async () => {
    const { data } = await Cards.withName(inputTyped)
    setFetchedCardInfos(data)
  }

  const handleInputValue = (value) => {
    setInputTyped(value)
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
      <Button type="primary">Button</Button>
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

export default Decks
