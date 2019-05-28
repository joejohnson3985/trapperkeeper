import { putCard } from './index';
import * as actions from '../../actions';

describe('putCard', () => {
  let mockUrl;
  let mockCard;
  let mockDispatch

  beforeEach(() => {
    mockUrl = 'www.testurl.com'
    mockCards = [{id:1, name:'bob', list:[1,2,3]}]
    mockDispatch = jest.fn()

    fetchData = jest.fn().mockImplementation(() => Promise.resolve({
      ok:true,
      json: () => {
        Promise.resolve(mockCards)
      }
    }))
  });

  it('should be called with the correct params', () => {

  });
  
})