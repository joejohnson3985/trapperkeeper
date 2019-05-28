import fetchData from './fetchData';


describe('fetchData', () => {
  let mockUrl;
  let mockCards;
  beforeEach(() => {
    mockUrl = 'www.pie.com'
    mockCards = [{id:1, name:'beans', list:[1,2,3]}, {id:2, name:'not beans', list:[4,5,6]}]
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => {
        Promise.resolve(mockCards)
      }
    }))
  })

  it('should be called with the correct params', () => {
    let mockOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(mockCards[0])
    }
    fetchData(mockUrl, mockOptions)
    expect(window.fetch).toHaveBeenCalledWith(mockUrl, mockOptions)
  });
})
