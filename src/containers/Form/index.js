import React, { Component } from 'react';
import './_Form.scss';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import FormItem from '../../components/FormItem/index';
import postCard from '../../thunks/postCard';
import deleteCard from '../../thunks/deleteCard';
import trash from '../../media/icons/delete_outline.svg';


export class Form extends Component {
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
    const {id, name, list} = data;
    this.setState({id, name, list}); 
  }

  handleSubmit = () => {
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

  removeItem = (id) => {
    const list = this.state.list.filter(listItem => {
      return listItem.list_id !== id
    })
    this.setState({ list })
  }

  addFormItem = (item) => {
    const list = [...this.state.list, item];
    this.setState({list, item: ''});
  }

  updateFormItem = (item, index) => {
    let list = this.state.list
    list.splice(index, 1, item)
    this.setState({list})
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({[name]: value})
  }

  handleItemChange = (e) => {
    const { value } = e.target;
    this.setState({ item: value });
    if(e.key === 'Enter') {
      this.handleItemSubmit({ list_id: Date.now(), item: this.state.item, checked: false })
    }
  }

  render() {
    let items;
    const deleteBtn = this.props.cardData && <Link to='/' onClick={() => this.props.deleteCard(this.props.cardData.id)} ><img src={trash} alt='Delete card' /></Link>
    let completedItems;
    if (this.state.list.length) {
      completedItems = this.state.list.filter(item => item.checked).map(item => <FormItem handleItemSubmit={this.handleItemSubmit} {...item} removeItem={this.removeItem} key={item.list_id}/>)
      items = this.state.list.filter(item => !item.checked).map(item => <FormItem handleItemSubmit={this.handleItemSubmit} removeItem={this.removeItem} {...item} key={item.list_id}/> )
    }

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
        {items}
        <input 
          className='item-text'
          type='text'
          onChange={this.handleItemChange}
          onKeyPress={this.handleItemChange}
          placeholder='List item'
          value={this.state.item}
          contentEditable={true}
        />
        {completedItems}
        <Link to='/' className='home-button'>Home</Link>
        <div onClick={() => this.handleSubmit()}>save</div>
        {deleteBtn}
      </form>
      </div>
    );  
  }
}

const mapDispatchToProps = (dispatch) => ({
  postCard: (card) => dispatch(postCard(card)),
  deleteCard: (id) => dispatch(deleteCard(id))
});

export default connect(null, mapDispatchToProps)(Form);
