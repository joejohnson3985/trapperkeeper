import { updateCard } from '../../actions';
import fetchData from '../fetchData';

export const putCard = (card) => {
  return async (dispatch) =>  {
    try {
      const url = `http://localhost:3000/api/v1/cards/${card.id}`;
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/JSON'
        },
        body: JSON.stringify(card)
      }
      await fetchData(url, options);
      dispatch(updateCard(card));
    } catch (error) {

    }
  }
}

export default putCard;