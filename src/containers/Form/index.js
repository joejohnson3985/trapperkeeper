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
    const title = e.target.querySelector('.title') 
    let items = Array.from(e.target.querySelectorAll('.item-text'));
    items = items.map(item => {
      return {value: item.value, checked: item.getAttribute('checked')};
    });
    const newCard = {title, list: items};
    this.props.createCard(newCard);
  }

  addFormItem = (item) => {
    const list = [...this.state.list, item];
    this.setState({list});
  }

  render() {
    let items;
    if (this.state.list.length) {
      items = this.state.list.map(item => {
        return <FormItem addFormItem={this.addFormItem} />;
      });
    }
    return (
      <form onSubmit={this.handleSubmit} className='Form'>
        <h3 className='title'>Note Form</h3>
        <FormItem addFormItem={this.addFormItem} />
        {items}
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