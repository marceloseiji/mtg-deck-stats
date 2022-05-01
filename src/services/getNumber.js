const getNumber = async () => {
  const response = await fetch(
    'https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300'
  )
  const data = response.json()
  return data
}
export default getNumber
