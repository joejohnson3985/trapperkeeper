import * as actions from './index';

describe('Actions', () => {

  it('should give back array of cards on type "SET_CARDS"', () => {
    const cards = [{id:1, name:'Bob'}];
    const expected = {
      type: 'SET_CARDS',
      cards
    }
    const result = actions.setCards(cards)
    expect(result).toEqual(expected)
  });

  it('should create a card on type "CREATE_CARD"', () => {

  });

  it('should set the current card on type "SET_CURRENT_CARD"', () => {

  });
})