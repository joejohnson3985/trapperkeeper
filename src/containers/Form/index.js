import React, { Component } from 'react';
import add from '../../media/icons/add.svg';
import box from '../../media/icons/check_box_blank.svg';
import checkedBox from '../../media/icons/check_box.svg';
import clear from '../../media/icons/clear.svg';
import trash from '../../media/icons/delete.svg';
import trashOutline from '../../media/icons/delete_outline.svg';


class Form extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <form className='Form'>
        <h3>Note Form</h3>
        <div className='item'>
          <img className='icon' src={add} alt='Add Item' />
          <div className='item-text' contentEditable ></div>
        </div>
        <img src={box} alt='Unchecked checkbox' />
        <img src={checkedBox} alt='Checked checkbox' />
        <img src={clear} alt='Remove Item' />
        <img src={trash} alt='Delete Card' />
        <img src={trashOutline} alt='Delete Card' />
      </form>
    );  
  }
}

export default Form;