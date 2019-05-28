import fetchData from './fetchData';


describe('fetchData', () => {
  let mockUrl;
  let mockCards;
  let mockOptions;
  beforeEach(() => {
    mockUrl = 'http://localhost:3000/api/v1/cards'
    mockCards = [{id:1, name:'beans', list:[1,2,3]}, {id:2, name:'not beans', list:[4,5,6]}]
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () =>  Promise.resolve(mockCards)
    }))
    mockOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(mockCards[0])
    }
  })

  it('should be called with the correct params', () => {
    fetchData(mockUrl, mockOptions)
    expect(window.fetch).toHaveBeenCalledWith(mockUrl, mockOptions)
  });

  it('should return a parsed response for happy path', async () => {
    const result = await fetchData(mockUrl, mockOptions)
    expect(result).toEqual(mockCards)
  });

  it("should return null if the statusText is 'No Content'", async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      statusText: 'No Content'
    }))
    const result = await fetchData(mockUrl)
    expect(result).toEqual(null)
  });

  it('should return an error if sad path is hit', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Really bad error'
    }))
    await expect(fetchData()).rejects.toEqual(Error('Really bad error'))
  });
  
})
