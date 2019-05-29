import { cardsReducer } from './cardsReducer'
import * as actions from '../actions/index'

describe('cardsReducer', () => {

  it('Should have default state', () => {
    const outcome = [];
    const result = cardsReducer(undefined, {});
    expect(result).toEqual(outcome)
  });

  it('Should create the property in store with an array', () => {
    const outcome = [
      {id:1, name:'Chores'},
      {id:2, name:'Errands'}
    ]
    const initialState = []
    const action = actions.setCards(outcome)
    const result = cardsReducer(initialState, action)
    expect(result).toEqual(outcome)
  });

  it('Should add a card to current array inside of the store', () => {
    const outcome = {id:1, name:'Chores'}
    const initialState = []
    const action = actions.createCard(outcome)
    const result = cardsReducer(initialState, action)
    expect(result).toEqual([outcome])
  });

})