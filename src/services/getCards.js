const getCards = async () => {
  const response = await fetch(
    'https://api.magicthegathering.io/v1/cards?page=3'
  )
  const data = response.json()
  return data
}
export default getCards
