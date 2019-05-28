const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  if (!response.ok) throw Error(response.statusText);
  return response.statusText === 'No Content' ? null : await response.json();
}

export default fetchData;