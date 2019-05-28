import React from 'react';
import FormItem from './index';
import { shallow } from 'enzyme';

describe('FormItem', () => {
  let wrapper;
  let mockFunc = jest.fn()
  let mockItem = {item:'do the dishes'}

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
      checked: false
    })
  });
})

