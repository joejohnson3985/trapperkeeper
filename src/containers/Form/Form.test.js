import React from 'react';
import { Form, mapStateToProps, mapDispatchToProps } from './index';
import * as actions from '../../actions/index';
import { shallow, mount } from 'enzyme';

import putCard from '../../thunks/putCard/index';
jest.mock('../../thunks/putCard')

import deleteCard from '../../thunks/deleteCard';
jest.mock('../../thunks/deleteCard')

import postCard from '../../thunks/postCard';
jest.mock('../../thunks/postCard')


describe('Form', () => {

  describe('Component', () => {
    let wrapper;
    let mockData;

    beforeEach(() => {

      mockData = {id:1, name:'chores', list: [1,2,3]}

      wrapper = shallow(
        <Form cardData={mockData}
              id={mockData.id}
              list={mockData.list} />
      )
    });

    it('should have a snapshot', () => {
      console.log(wrapper)
      expect(wrapper).toMatchSnapshot()
    });

    it('should have default state', () => {
      wrapper = shallow(<Form />)
      expect(wrapper.state()).toEqual({
        name:'',
        item:'',
        list:[]
      })
    });

  });
  describe('mapDispatchToProps', () => {
    it('should call method postCard with correct params', () => {
      let mockCard = {id:1, name:'chores', list:[1,2,3]}
      let mockDispatch = jest.fn();
      let actionToDispatch = postCard(mockCard)
      let mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.postCard(actionToDispatch)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

    it('should call method putCard with correct params', () => {
      let mockCard = {id:1, name:'chores', list:[1,2,3]}
      let mockDispatch = jest.fn();
      let actionToDispatch = putCard(mockCard)
      let mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.putCard(actionToDispatch)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

    it('should call method deleteCard with correct params', () => {
      let mockId = 12323123
      let mockDispatch = jest.fn();
      let actionToDispatch = deleteCard(mockId)
      let mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.deleteCard(actionToDispatch)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });
  });
});


