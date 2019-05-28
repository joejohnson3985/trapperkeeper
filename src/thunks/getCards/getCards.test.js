import getCards from './index';
import fetchData from '../fetchData'
import * as actions from '../../actions';
jest.mock('../fetchData')

describe('putCard', () => {
  let mockUrl;
  let mockCards;
  let mockDispatch;
  let mockFetchData;

  beforeEach(() => {
    mockUrl = 'www.testurl.com'
    mockCards = [{id:1, name:'bob', list:[1,2,3]}]
    mockDispatch = jest.fn()
    mockFetchData = jest.fn().mockImplementation(() => Promise.resolve(mockCards))
    // fetchData.get.mockResolvedValue(mockCards) 
  })

  it('should call fetchData', async () => {
    await getCards(mockUrl)(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.setCards(mockCards));
  });
  
})