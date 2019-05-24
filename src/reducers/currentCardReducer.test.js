import { currentCardReducer } from './currentCardReducer';
import * as actions from '../actions/index';

describe('currentCardReducer', ()=> {

  it('Should have default state', () => {
    const outcome = {};
    const result = currentCardReducer(undefined, {})
    expect(result).toEqual(outcome)
  });

  it('Should set the state of a current card being viewed by the user', () => {

  });
});