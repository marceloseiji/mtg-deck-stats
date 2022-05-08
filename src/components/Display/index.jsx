import React from 'react'
import './styles.css'
import getCards from '../../services/getCards'

const Display = async () => {
  const cards = getCards()
  console.log(await cards)
  return <div className="display"></div>
}

export default Display
