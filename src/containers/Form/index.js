import React, { Component } from 'react';
import './_Form.scss';
import FormItem from '../FormItem';
import trash from '../../media/icons/delete.svg';
import trashOutline from '../../media/icons/delete_outline.svg';


class Form extends Component {

  render() {
    return (
      <form className='Form'>
        <h3>Note Form</h3>
        <FormItem />
        <img src={trash} alt='Delete Card' />
        <img src={trashOutline} alt='Delete Card' />
      </form>
    );  
  }
}

export default Form;