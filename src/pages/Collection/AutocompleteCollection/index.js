import React, { useState, useEffect, useContext } from 'react'
import Cards from 'services/Cards'
import { AutoComplete } from 'antd'
import { CollectionContext } from 'contexts/CollectionContext'

const AutocompleteCollection = () => {
  const { setMyCollection } = useContext(CollectionContext)
  const [autoCompleteOptions, setAutocompleteOptions] = useState([])
  const [cardFetched, setCardsFetched] = useState([])
  const [inputTyped, setInputTyped] = useState('')
  const [status, setStatus] = useState('')

  const getCardsByName = async () => {
    const { data } = await Cards.withName(inputTyped)
    if (data) {
      setCardsFetched(data)
      arrayCardsNames(data)
    } else {
      resetAutocomplete()
      setStatus('error')
    }
  }

  const resetAutocomplete = () => {
    setCardsFetched([])
    arrayCardsNames([])
    setAutocompleteOptions([])
    handleInputValue('')
  }

  const arrayCardsNames = (data) => {
    const dataCardsNames = data.map((card) => ({
      value: card.name,
      id: card.id
    }))
    setAutocompleteOptions(dataCardsNames)
  }

  const handleAddCardToCollection = (option) => {
    const card = cardFetched.find((card) => card.id === option.id)
    console.log(cardFetched)
    console.log(option)
    setMyCollection((previousCardsCollection) => [
      ...previousCardsCollection,
      card
    ])
    resetAutocomplete()
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
    <AutoComplete
      allowClear
      options={autoCompleteOptions}
      status={status}
      onSearch={(value) => handleInputValue(value)}
      style={{ width: 200 }}
      onSelect={(value, option) => handleAddCardToCollection(option)}
      placeholder="Card name..."
      notFoundContent="No card found..."
      value={inputTyped}
    />
  )
}

export default AutocompleteCollection
