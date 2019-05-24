import { cardReducer } from './cardReducer'
import * as actions from '../actions/index'

describe('cardReducer', () => {

  it('Should have default state', () => {
    const outcome = [];
    const result = cardReducer(undefined, {});
    expect(result).toEqual(outcome)
  });

  it('Should create the property in store with an array', () => {
    const outcome = [
      {id:1, name:'Chores'},
      {id:2, name:'Errands'}
    ]
    const initialState = []
    const action = actions.setCards(outcome)
    const result = cardReducer(initialState, action)
    expect(result).toEqual(outcome)
  });

  it('Should add a card to current array inside of the store', () => {
    const outcome = {id:1, name:'Chores'}
    const initialState = []
    const action = actions.createCard(outcome)
    const result = cardReducer(initialState, action)
    expect(result).toEqual([outcome])
  });

})