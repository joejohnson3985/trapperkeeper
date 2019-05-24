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

  componentDidMount() {
    this.populateForm()
  }

  populateForm = () => {
    if(this.props.item) {
      this.setState({ value: this.props.item, id: this.props.list_id})
    } else {
      this.setState({id: Date.now()})
    }
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ value });
  }

  toggleCheckBox = (e) => {
    const checked = !this.state.checked;
    this.setState({ checked });
  }

  handleKeypress = (e) => {
    const idToUse = this.props.list_id
    if(e.key === 'Enter') {
    this.props.addFormItem({ list_id: this.state.id, item: this.state.value, checked: this.state.checked });
    this.setState({value: ''})
    }
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
          onKeyPress={this.handleKeypress}
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