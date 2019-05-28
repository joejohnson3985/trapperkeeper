import { removeCard } from '../../actions';
import fetchData from '../fetchData';

export const deleteCard = (id) => {
  return async (dispatch) =>  {
    try {
      const url = `http://localhost:3000/api/v1/cards/${id}`;
      const options = {
        method: 'DELETE'
      }
      await fetchData(url, options);
      dispatch(removeCard(id));
    } catch (error) {

    }
  }
}

export default deleteCard;