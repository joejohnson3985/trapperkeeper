import deleteCard from './';
import fetchData from '../fetchData';
import * as actions from '../../actions';

describe('deleteCard', () => {
  let mockUrl;
  let mockCards;
  let mockDispatch;

  beforeEach(() => {
    mockUrl = 'www.testurl.com'
    mockCards = [{id:1, name:'bob', list:[1,2,3]}]
    mockDispatch = jest.fn()
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(null)
    }));
  })

  it('should call fetch', async () => {
    await deleteCard(mockCards[0].id)(mockDispatch);
    expect(window.fetch).toHaveBeenCalled();
  });

  it('should dispatch removeCard', async () => {
    await deleteCard(mockCards[0].id)(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.removeCard(mockCards[0].id));
  });
});