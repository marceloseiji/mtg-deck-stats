class Cards {
  constructor() {
    this.url = 'https://api.scryfall.com/cards/search'
  }

  withPagination = async (page) => {
    const response = await fetch(`${this.url}?page=${page}`)
    return await response.json()
  }

  withName = async (name) => {
    const response = await fetch(`${this.url}?q=${name}`)
    return await response.json()
  }
}
export default new Cards()
