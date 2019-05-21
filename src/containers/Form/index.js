import React, { Component } from 'react';
import add from '../../media/icons/add.svg';
import box from '../../media/icons/check_box_blank.svg';
import checkedBox from '../../media/icons/check_box.svg';
import trash from '../../media/icons/delete.svg';


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
        <img src={box} alt='Unchecked checkbox' />
        <img src={checkedBox} alt='Checked checkbox' />
        <img src={add} alt='Add Item' />
        <img src={trash} alt='Delete Card' />
      </form>
    );  
  }
}

export default Form;