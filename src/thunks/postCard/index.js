import { createCard } from '../../actions';
import { fetchData } from '../fetchData';

export const postCard = (state) => {
  return async (dispatch) =>  {
    try {
      const url = 'http://localhost:3000/api/v1/cards';
      const options = {
        method: 'POST',
        body: JSON.stringify(state),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      return await fetchData(url, options);
    } catch (error) {

    }
  }
}

export default postCard;