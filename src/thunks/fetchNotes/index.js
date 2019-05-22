import { setNotes } from '../../actions';

export const fetchCards = (url) => {
  return async (dispatch) =>  {
    try {
      const response = await fetch(url)
      if(!response.ok) {
        throw Error(response.statusText)
      }
      const cards = await response.json()
      dispatch(setNotes(cards))
    } catch (error) {
      dispatch(console.log(error.message))
    }
  }
}