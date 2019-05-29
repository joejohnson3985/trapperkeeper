import React from 'react';
import { CardContainer, mapStateToProps} from './index';
import { shallow } from 'enzyme';

describe('CardContainer', () => {
  describe('component', () => {
    let wrapper;

    beforeEach(()=> {
      wrapper = shallow(
        <CardContainer cards={[{},{}]}/>
      )
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();    
    });
  })

  describe('mapStateToProps', () => {
    it('should have state from store', () => {
      let mockState = {
        cards: [],
        magic: []
      }
      let expected = {
        cards: []
      }
      const result = mapStateToProps(mockState);
      expect(result).toEqual(expected)
    })
  })
})

