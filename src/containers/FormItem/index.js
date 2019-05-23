import React, { Component } from 'react';
import add from '../../media/icons/add.svg';
import box from '../../media/icons/check_box_blank.svg';
import checkedBox from '../../media/icons/check_box.svg';
import clear from '../../media/icons/clear.svg';

class FormItem extends Component {
  constructor() {
    super();

    this.state = {
      empty: true,
      value: '',
      checked: false
    }
  }

  handleChange = (e) => {
    const { value } = e.target;
    if (this.state.empty) {
      this.setState({ value, empty: false })
      this.props.addFormItem({value, checked: this.state.checked});
    } else {
      this.setState({ value });
    }
  }

  toggleCheckBox = (e) => {
    const checked = !this.state.checked;
    this.setState({ checked });
  }

  render() {
    const {checked, value} = this.state;
    const boxIcon = 
    <img 
      onClick={this.toggleCheckBox} 
      className='icon check-box' 
      role='checkbox' 
      aria-checked={checked}
      checked={checked} 
      src={checked ? checkedBox : box} 
      alt='Checkbox' 
    />;
    const plus = <img className='icon add' src={add} alt='Add item' />
    const prevIcon = value.length ? boxIcon : plus;
    return (
      <div className='FormItem'>
        {prevIcon}
        <input 
          className='item-text'
          type='text'
          onChange={this.handleChange}
          placeholder='List item'
          value={value}
          contentEditable={true}
        />
        <img className='icon clear' src={clear} alt='Clear item' />
      </div>
    );  
  }
}

export default FormItem;