const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  if (!response.ok) throw Error(response.statusText);
  console.log(response.statusText)
  return await response.json();
}

export default fetchData;