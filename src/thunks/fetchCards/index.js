import { setCards } from '../../actions';

const fetchCards = (url) => {
  return async (dispatch) =>  {
    try {
      const response = await fetch(url)
      if(!response.ok) {
        throw Error(response.statusText)
      }
      const cards = await response.json();
      dispatch(setCards(cards))
    } catch (error) {
    }
  }
}

export default fetchCards;