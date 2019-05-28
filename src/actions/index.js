export const setCards = (cards) => ({
  type: 'SET_CARDS',
  cards
})

export const createCard = (card) => ({
  type: 'CREATE_CARD',
  card
})

export const deleteCard = (id) => ({
  type: 'DELETE_CARD',
  id
})