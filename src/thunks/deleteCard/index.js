import { removeCard } from '../../actions';
import fetchData from '../fetchData';

export const deleteCard = (id) => {
  return async (dispatch) =>  {
    try {
      const url = `http://localhost:3000/api/v1/cards/${id}`;
      const options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }
      console.log(url)
      await fetchData(url, options);
      console.log('delete card')
      dispatch(removeCard(id));
    } catch (error) {
      console.log(error)
    }
  }
}

export default deleteCard;