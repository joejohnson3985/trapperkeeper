export const cardsReducer = (state=[], action) => {
  switch (action.type) {
    case 'SET_CARDS':
      return action.cards;
    case 'CREATE_CARD':
      return [...state, action.card];
    case 'REMOVE_CARD':
      return state.filter(card => card.id !== action.id);
    case 'UPDATE_CARD':
      const index = state.findIndex(card => card.id === action.id);
      state[index] = action.card;
      return state;
    default:
      return state;
  }
}