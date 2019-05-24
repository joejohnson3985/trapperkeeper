import { currentCardReducer } from './currentCardReducer';
import * as actions from '../actions/index';

describe('currentCardReducer', ()=> {

  it('Should have default state', () => {
    const outcome = {};
    const result = currentCardReducer(undefined, {})
    expect(result).toEqual(outcome)
  });

  it('Should set the state of a current card being viewed by the user', () => {
    const outcome = {id:1, name: 'Cleaning Schedule'};
    const initialState = {};
    const action = actions.setCurrentCard(outcome);
    const result = currentCardReducer(initialState, action);
    expect(result).toEqual(outcome)
  });
});