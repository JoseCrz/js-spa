const URL = 'https://rickandmortyapi.com/api/character/'

const getData = async id => {
  const apiURL = id ? `${URL}${id}` : URL
  try {
    const response = await fetch(apiURL)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Something went wrong', error)
  }
}

export default getData