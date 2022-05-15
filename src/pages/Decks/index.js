import React, { useEffect, useState } from 'react'
import Cards from 'services/Cards'
import { AutoComplete, Space } from 'antd'

const Decks = () => {
  const [autoCompleteOptions, setAutocompleteOptions] = useState([])
  const [cardFetched, setCardsFetched] = useState([])
  const [inputTyped, setInputTyped] = useState('')
  const [cardsCollection, setCardsCollection] = useState([])

  const getCardsByName = async () => {
    const { data } = await Cards.withName(inputTyped)
    setCardsFetched(data)
    arrayCardsNames(data)
  }

  const arrayCardsNames = (data) => {
    const dataCardsNames = data.map((card) => ({
      value: card.name,
      id: card.id
    }))
    setAutocompleteOptions(dataCardsNames)
  }

  const handleInputValue = (value) => {
    setInputTyped(value)
  }

  const handleAddCardToCollection = (option) => {
    const card = cardFetched.find((card) => card.id === option.id)
    setCardsCollection((previousCardsCollection) => [
      ...previousCardsCollection,
      card
    ])
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
      <AutoComplete
        options={autoCompleteOptions}
        onSearch={(text) => handleInputValue(text)}
        status="error"
        style={{ width: 200 }}
        onSelect={(value, option) => handleAddCardToCollection(option)}
        placeholder="Card name..."
        notFoundContent="No card found..."
      />
    </>
  )
}

export default Decks
