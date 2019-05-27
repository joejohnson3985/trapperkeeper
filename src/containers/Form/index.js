import React, { Component } from 'react';
import './_Form.scss';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import FormItem from '../FormItem';
import { setCurrentCard } from '../../actions';
import { createCard } from '../../actions';
import { fetcherPoster } from '../../fetches/fetcher'


class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      list: []
    }
  }

  componentDidMount() {
    this.populateForm()
  }

  populateForm = () => {
    if(this.props.currentCard.name) {
      const {name, list} = this.props.currentCard
      this.setState({ name: name, list: list })
    } 
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetcherPoster(this.state).then(result => this.props.createCard(result))
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
    this.setState({list});
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
    return <div>{items}<FormItem handleItemSubmit={this.handleItemSubmit}/></div>
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
        <Link to='/' onClick={this.clearCurrent} className='home-button'>Home</Link>
      </form>
      </div>
    );  
  }
}

const mapStateToProps = (state) => ({
  currentCard: state.currentCard
})

const mapDispatchToProps = (dispatch) => ({
  setCard: (card) => dispatch(setCurrentCard(card)),
  createCard: (card) => dispatch(createCard(card))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);