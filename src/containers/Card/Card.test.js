import React from 'react';
import { Card, mapDispatchToProps } from './index';
import { shallow } from 'enzyme';

import deleteCard from '../../thunks/deleteCard';
jest.mock('../../thunks/deleteCard')

describe('Card', () => {
  describe('component', () => {
    let wrapper;

    let mockCard = {id:1, name:'Chores', list:[1,2,3]}

    beforeEach(() => {
      wrapper = shallow(
        <Card card={mockCard} 
              key={mockCard.id}/>
      )
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    });
  })

  describe('mapDispatchToProps', () => {
    it('should call deleteCard with the correct params', () => {
      let mockId = 12323123
      let mockDispatch = jest.fn();
      let actionToDispatch = deleteCard(mockId)
      let mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.deleteCard(actionToDispatch)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });
  });
  
})
