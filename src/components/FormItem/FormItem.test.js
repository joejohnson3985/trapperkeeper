import React from 'react';
import FormItem from './index';
import { shallow } from 'enzyme';

describe('FormItem', () => {
  let wrapper;
  let mockFunc = jest.fn()
  let mockItem = {list_id:1, item:'do the dishes'}

  beforeEach(() => {
    wrapper = shallow(
      <FormItem handleItemSubmit={mockFunc} 
                {...mockItem} 
                key={mockItem.list_id} />
    )
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    expect(wrapper.state()).toEqual({
      value:'do the dishes',
      id:1,
      checked: false
    })
  });

  it('should change the state of checked when toggleCheckBox is called', () => {
    wrapper.instance().toggleCheckBox()
    expect(wrapper.state('checked')).toEqual(true)
  });

  it('should set value in state when handleChange is called', () => {
    let mockEvent = {target: {value: 'pie'}}
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state('value')).toEqual('pie')
  });

  it('should setstate for value id and checked if prop exists and populateForm is called', () => {

  });
})

