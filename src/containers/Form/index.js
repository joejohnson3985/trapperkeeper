import React, { Component } from 'react';
import './_Form.scss';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import FormItem from '../FormItem';
import { setCurrentCard } from '../../actions';
// import trash from '../../media/icons/delete.svg';
// import trashOutline from '../../media/icons/delete_outline.svg';
import { createCard } from '../../actions';
import { fetcherPoster } from '../../fetches/fetcher'


export class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      list: []
    }
  }

  // componentDidMount() {
  //   this.populateForm()
  // }

  // populateForm = () => {
  //   if(this.props.currentCard.name) {
  //     const {name, list} = this.props.currentCard
  //     this.setState({ name: name, list: list })
  //   } 
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    fetcherPoster(this.state).then(result => this.props.createCard(result))
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

  clearCurrent = () => {
    this.props.setCard({})
  }

  render() {
    let items;
    if (this.state.list.length) {
      items = this.state.list.map(item => {
        return <FormItem addFormItem={this.addFormItem} {...item} key={item.list_id}/>;
      });
    }
    return (
      <div className='overlay'>
        <form onSubmit={this.handleSubmit} className='Form'>
          <input 
            type='text'
            placeholder='Add Title'
            id='new-title-input'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
          />
        <FormItem addFormItem={this.addFormItem} />
        {items}
        <button onSubmit={this.handleSubmit}>Save Card</button>
        <Link to='/' onClick={this.clearCurrent} className='home-button'>Home</Link>
      </form>
      </div>
    );  
  }
}

export const mapStateToProps = (state) => ({
  currentCard: state.currentCard
})

export const mapDispatchToProps = (dispatch) => ({
  setCard: (card) => dispatch(setCurrentCard(card)),
  createCard: (card) => dispatch(createCard(card))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);