function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const fetchingData = async (param) => {
  await sleep(1000);
  const response = await fetch(`http://localhost:3500/api/${param}`);

  return response.json()
}

export default fetchingData;