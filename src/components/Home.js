import React, { useEffect } from 'react'
import Cards from 'services/Cards'

const Home = () => {
  const getCardsByPaginagion = async () => {
    const cards = await Cards.withPagination(5)
    console.log(cards)
  }

  const getCardsByName = async () => {
    const cards = await Cards.withName('meddling mage')
    console.log(cards)
  }

  useEffect(() => {
    getCardsByName()
  }, [])
  return <h1>Cards</h1>
}

export default Home
