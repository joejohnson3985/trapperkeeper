export const fetcherPoster = (state) => {
  return fetch('http://localhost:3000/api/v1/cards', {
    method: 'POST',
    body: JSON.stringify(state),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
}