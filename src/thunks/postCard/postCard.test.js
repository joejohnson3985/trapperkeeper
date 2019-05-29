import { Thunk } from 'redux-testkit';
import * as actions from '../../actions'
import postCard from './';
import fetchData from '../fetchData';
jest.mock('../fetchData.js');
  
describe('postCard', () => {
  let mockCard;

  beforeEach(() => {
    mockCard = {name: 'bobs tasks', list: [1,2,3]};
  });

  it('should dispatch the createCard action when called', async () => {
    fetchData.mockReturnValueOnce({id: 1, mockCard});
    const dispatches = await Thunk(postCard).execute();
    expect(dispatches.length).toBe(1);
    expect(dispatches[0].getAction()).toEqual({ type: 'CREATE_CARD', card: {id: 1, mockCard} });
  });

  it('should call fetchData', async () => {
    const result = await Thunk(postCard).execute();
    expect(fetchData).toHaveBeenCalled();
  });
})