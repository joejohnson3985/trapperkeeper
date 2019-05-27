export const cardsReducer = (state=[], action) => {
  switch (action.type) {
    case 'SET_CARDS':
      return action.cards;
    case 'CREATE_CARD':
      return [...state, action.card];
    default:
      return state
  }
}