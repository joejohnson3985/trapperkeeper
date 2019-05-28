import React, { Component } from 'react';
import './_Form.scss';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import FormItem from '../FormItem';
import postCard from '../../thunks/postCard';


class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      item: '',
      list: []
    }
  }

  componentDidMount() {
    const {cardData} = this.props;
    cardData && this.populateForm(cardData);
  }

  populateForm = (data) => {
    const {name, list} = data;
    this.setState({name, list}); 
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.postCard(this.state);
  }

  handleItemSubmit = (item) => {
    const { list } = this.state
    const itemToEdit = list.find(listItem => listItem.list_id === item.list_id)
    const indexToEdit = list.indexOf(itemToEdit)
    if(indexToEdit !== -1) {
      this.updateFormItem(item, indexToEdit)
    } else {
      this.addFormItem(item)
    }
  }

  addFormItem = (item) => {
    const list = [...this.state.list, item];
    this.setState({list, item: ''});
  }

  updateFormItem = (item, index) => {
    this.state.list.splice(index, 1, item)
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({[name]: value})
  }

  clearCurrent = () => {
    this.props.setCard({})
  }

  displayExisitingItems = () => {
    let items;
    if (this.state.list.length) {
      items = this.state.list.map(item => <FormItem handleItemSubmit={this.handleItemSubmit} {...item} key={item.list_id}/>);
    }
    return items
  }

  handleItemChange = (e) => {
    const { value } = e.target;
    this.setState({ item: value });
    if(e.key === 'Enter') {
      this.handleItemSubmit({ list_id: Date.now(), item: this.state.item, checked: false })
    }
  }

  render() {
    return (
      <div className='overlay'>
        <form className='Form'>
          <input 
            type='text'
            placeholder='Add Title'
            id='new-title-input'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
          />
        {this.displayExisitingItems()}
        <input 
          className='item-text'
          type='text'
          onChange={this.handleItemChange}
          onKeyPress={this.handleItemChange}
          placeholder='List item'
          value={this.state.item}
          contentEditable={true}
        />
        <Link to='/' onClick={this.clearCurrent} className='home-button'>Home</Link>
      </form>
      </div>
    );  
  }
}

const mapDispatchToProps = (dispatch) => ({
  postCard: (card) => dispatch(postCard(card))
});

export default connect(null, mapDispatchToProps)(Form);