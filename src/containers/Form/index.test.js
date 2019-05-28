import React from 'react';
import { Form, mapStateToProps, mapDispatchToProps } from './index';
import * as actions from '../../actions/index';
import { shallow, mount } from 'enzyme';

describe('Form', () => {

  describe('Component', () => {
    let wrapper;
    let mockData;

    beforeEach(() => {
      mockData = {id:1, name:'chores'}
      wrapper = shallow(
        <Form cardData={mockData} />
      )
    });

    it('should have a snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    });

    it('should have default state', () => {
      console.log('here', state)
      expect(wrapper.state()).toEqual({
        name:'',
        item:'',
        list:[]
      })
    });

      describe('mapDispatchToProps', () => {
        it.skip('should call method postCard with correct params', () => {

        });
      });
  });
});


