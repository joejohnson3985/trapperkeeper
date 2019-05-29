import React, { Component } from 'react';
import add from '../../media/icons/add.svg';
import box from '../../media/icons/check_box_blank.svg';
import checkedBox from '../../media/icons/check_box.svg';
import clear from '../../media/icons/clear.svg';
import PropTypes from 'prop-types';


class FormItem extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      checked: false
    }
  }

  componentDidMount() {
    this.populateForm()
  }

  populateForm = () => {
    if(this.props.item) {
      this.setState({ value: this.props.item, id: this.props.list_id, checked: this.state.checked})
    } else {
      this.setState({id: Date.now()})
    }
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ value });
  }

  toggleCheckBox = () => {
    const checked = !this.state.checked;
    this.setState({ checked }, () => {
      this.props.handleItemSubmit({ list_id: this.state.id, item: this.state.value, checked: this.state.checked });
    });
  }

  handleKeypress = (e) => {
    if(e.key === 'Enter') {
      this.props.handleItemSubmit({ list_id: this.state.id, item: this.state.value, checked: this.state.checked });
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
      src={checked ? checkedBox : box} 
      alt='Checkbox' 
    />;
    const plus = <img className='icon add' src={add} alt='Add item' />
    const prevIcon = value.length ? boxIcon : plus;
    return (
      <div className='FormItem' id={this.props.list_id}>
        {prevIcon}
        <input 
          className={`item-text ${checked && 'checked-item'}`}
          type='text'
          onChange={this.handleChange}
          onKeyPress={this.handleKeypress}
          placeholder='List item'
          value={value}
          contentEditable={true}
        />
        <img onClick={()=> this.props.removeItem(this.props.list_id)} className='icon clear' src={clear} alt='Clear item' />
      </div>
    );  
  }
}

FormItem.propTypes = {
  checked: PropTypes.bool,
  handleItemSubmit: PropTypes.func,
  removeItem: PropTypes.func,
  list_id: PropTypes.number,
  item: PropTypes.string
};

export default FormItem;