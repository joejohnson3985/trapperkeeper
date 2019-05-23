import React, { Component } from 'react';
import './_Form.scss';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import FormItem from '../FormItem';
import trash from '../../media/icons/delete.svg';
import trashOutline from '../../media/icons/delete_outline.svg';
import { createCard } from '../../actions';


class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      list: []
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('posting')
    const title = e.target.querySelector('.title') 
    let items = Array.from(e.target.querySelectorAll('.item-text'));
    items = items.map(item => {
      return {value: item.value, checked: item.getAttribute('checked')};
    });
    const newCard = {title, list: items};
    this.props.createCard(newCard);
    fetch('http://localhost:3000/api/v1/cards', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(result => this.props.createCard(result))
    this.setState({name: ''})
  }

  addFormItem = (item) => {
    const list = [...this.state.list, item];
    this.setState({list});
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({[name]: value})
  }

  render() {
    let items;
    if (this.state.list.length) {
      items = this.state.list.map(item => {
        return <FormItem addFormItem={this.addFormItem} 
                         list={this.state.list}/>;
      });
    }
    return (
      <div className='overlay'>
      <form onSubmit={this.handleSubmit} className='Form'>
        <input type='text'
               placeholder='Add Title'
               id='new-title-input'
               name='name'
               value={this.state.title}
               onChange={this.handleChange}/>
        <FormItem addFormItem={this.addFormItem} />
        {items}
        <Link onSubmit={this.handleSubmit} to='/' className='save-button'>Save Button</Link>
      </form>
      </div>
    );  
  }
}

const mapDispatchToProps = (dispatch) => ({
  createCard: (card) => dispatch(createCard(card))
});

export default connect(null, mapDispatchToProps)(Form);