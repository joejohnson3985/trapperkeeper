import { setCards } from '../../actions';
import fetchData from '../fetchData.js';

const getCards = (url) => {
  return async (dispatch) =>  {
    try {
      const cards = await fetchData(url);
      dispatch(setCards(cards))
    } catch (error) {

    }
  }
}

export default getCards;