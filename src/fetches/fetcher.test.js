import { fetcherPoster } from './fetcher';

describe('fetcherPoster', () => {
  let mockData;

  beforeEach(() => {
    mockData = {id:1, name:'chores', list:[1,2,3]}
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok:true,
        json: () => {
          Promise.resolve(mockData)
        }
      })
    })
  })
  it('should be called with the correct params', () => {
    const expected = ['http://localhost:3000/api/v1/cards', {body: JSON.stringify(mockData), method: 'POST', headers:{'Content-Type': 'application/json'}}]
    fetcherPoster(mockData)
    expect(window.fetch).toHaveBeenCalledWith(...expected)
  });
})
