import getCards from './index';
import fetchData from '../fetchData';
import * as actions from '../../actions';

describe('getCards', () => {
  let mockUrl;
  let mockCards;
  let mockDispatch;

  beforeEach(() => {
    mockUrl = 'www.testurl.com'
    mockCards = [{id:1, name:'bob', list:[1,2,3]}]
    mockDispatch = jest.fn()
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockCards)
    }));
  })

  it('should call fetch', async () => {
    await getCards(mockUrl)(mockDispatch);
    expect(window.fetch).toHaveBeenCalled();
  });

  it('should dispatch setCards', async () => {
    await getCards(mockUrl)(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.setCards(mockCards));
  });
  
})