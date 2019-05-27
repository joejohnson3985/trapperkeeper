export const cardsReducer = (state=[], action) => {
  switch (action.type) {
    case 'SET_CARDS':
      return action.cards;
    case 'CREATE_CARD':
      return [...state, action.card];
    case 'DELETE_CARD':
      return state.filter(card => card.id !== action.id);
    default:
      return state
  }
}