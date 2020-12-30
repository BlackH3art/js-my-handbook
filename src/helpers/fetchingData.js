
const fetchingData = async (param) => {

  const response = await fetch(`http://localhost:3500/api/${param}`);

  return response.json()
}

export default fetchingData;