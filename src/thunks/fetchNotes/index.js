import { setNotes } from '../../actions';

export const fetchNotes = (url) => {
  return async (dispatch) =>  {
    try {
      const response = await fetch(url)
      if(!response.ok) {
        throw Error(response.statusText)
      }
      const notes = await response.json()
      dispatch(setNotes(notes))
    } catch (error) {
      dispatch(console.log(error.message))
    }
  }
}