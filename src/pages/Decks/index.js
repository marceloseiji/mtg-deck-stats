import React, { useEffect, useState } from 'react'
import Cards from 'services/Cards'
import Autocomplete from 'components/Autocomplete'

const Decks = () => {
  const [fetchedCardInfos, setFetchedCardInfos] = useState('')
  const [inputTypedValue, setInputTypedValue] = useState('')
  const [loading, setLoading] = useState(false)

  const getCardsByName = async () => {
    const { data } = await Cards.withName(inputTypedValue)
    setFetchedCardInfos(data.map((card) => ({ title: card.name })))
  }

  useEffect(() => {
    if (fetchedCardInfos.length > 0) {
      setLoading(false)
    }
  }, [fetchedCardInfos])

  useEffect(() => {
    if (inputTypedValue?.length > 2) {
      let executeAfterTimeOut = setTimeout(() => {
        getCardsByName(inputTypedValue)
      }, [1000])
      setLoading(true)

      return () => {
        clearTimeout(executeAfterTimeOut)
      }
    }
  }, [inputTypedValue])

  return (
    <>
      <Autocomplete
        label={'Search cards'}
        data={fetchedCardInfos}
        setData={setFetchedCardInfos}
        setInputTypedValue={setInputTypedValue}
        loading={loading}
        noOptionsText="Enter card name..."
      />
    </>
  )
}

export default Decks
