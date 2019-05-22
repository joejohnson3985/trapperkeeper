import React, { Component } from 'react';
import './_Form.scss';
import { connect } from 'react-redux';
import FormItem from '../FormItem';
import trash from '../../media/icons/delete.svg';
import trashOutline from '../../media/icons/delete_outline.svg';
import { createCard } from '../../actions';


class Form extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    const title = e.target.querySelector('.title') 
    let items = Array.from(e.target.querySelectorAll('.item-text'));
    items = items.map(item => {
      return {value: item.value, checked: item.getAttribute('checked')};
    });
    const newCard = {title, list: items};
    this.props.createCard(newCard)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='Form'>
        <h3 className='title'>Note Form</h3>
        <FormItem />
        <FormItem />
        <FormItem />
        <img src={trash} alt='Delete Card' />
        <img src={trashOutline} alt='Delete Card' />
        <input type='submit' value='Save' />
      </form>
    );  
  }
}

const mapDispatchToProps = (dispatch) => ({
  createCard: (card) => dispatch(createCard(card))
});

export default connect(null, mapDispatchToProps)(Form);