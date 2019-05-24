export const currentCardReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_CURRENT_CARD':
      return action.card;
    default:
      console.log('goodbye')
      return state
  }
}