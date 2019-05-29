import React from 'react';
import { App, mapDispatchToProps, mapStateToProps } from './App';
import { shallow } from 'enzyme';
import  getCards  from '../../thunks/getCards/index';
jest.mock('../../thunks/getCards/index');

describe('App', () => {

  describe('component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <App />
      )
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  });
      
  describe('mapStateToProps', () => {
    it('should have a mapped state prop', () => {
      let mockState ={
        cards: [],
        magic: []
      }
      let expected = {
        cards: []
      }
      const result = mapStateToProps(mockState)
      expect(result).toEqual(expected)
    })
  });

  describe('mapDispatchToProps', () => {
    it('should call getCards with the correct params', () => {
      const mockUrl = 'www.bob.com'
      const mockDispatch = jest.fn();
      const actionToDispatch = getCards(mockUrl)
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.getCards(actionToDispatch)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  });
  
});
