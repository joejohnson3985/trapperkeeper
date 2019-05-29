import putCard from './';
import fetchData from '../fetchData';
import * as actions from '../../actions';
jest.mock('../fetchData');

describe('putCard', () => {
  let mockUrl;
  let mockOptions;
  let mockCard;
  let mockDispatch;

  beforeEach(() => {
    mockUrl = 'www.testurl.com';
    mockCard = {id:1, name:'bob', list:[1,2,3]};
    mockOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mockCard)
    };
    mockDispatch = jest.fn();
    window.fetch = jest.fn().mockImplementation((mockUrl, mockOptions) => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockCard)
    }));
  });

  it('should call fetchData', () => {
    putCard(mockCard)(mockDispatch);
    expect(fetchData).toHaveBeenCalled();
  });

  it('should dispatch updateCard', async () => {
    await putCard(mockCard)(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.updateCard(mockCard));
  });
});
