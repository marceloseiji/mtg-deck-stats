class Cards {
  constructor() {
    this.url = 'https://api.magicthegathering.io/v1/cards'
  }

  withPagination = async (page) => {
    const response = await fetch(`${this.url}?page=${page}`)
    return await response.json()
  }

  withName = async (name) => {
    const response = await fetch(`${this.url}?name=${name}`)
    return await response.json()
  }
}
export default new Cards()
