import { putCard } from './index';
import * as actions from '../../actions';

describe('putCard', () => {
  let mockUrl;
  let mockCard;
  let mockDispatch

  beforeEach(() => {
    mockUrl = 'www.testurl.com'
    mockCard = {id:1, name:'bob', list:[1,2,3]}
    mockDispatch = jest.fn()

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok:true,
      json: () => {
        Promise.resolve(mockCard)
      }
    }))
  });

  it('should call fetch with the correct params', () => {
    const thunk = putCard(mockUrl)(mockDispatch)
    // thunk(mockDispatch)
    expect(window.fetch).toHaveBeenCalledWith(actions.updateCard(mockCard))
  });
})
