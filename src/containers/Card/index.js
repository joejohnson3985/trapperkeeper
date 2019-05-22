import React, { Component } from 'react';
// import { connect } from 'react-redux';

class Card extends Component {
  constructor() {
    super()
    this.state = {
      listItems: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/cards/listitems')
    .then(response => response.json())
    .then(results => results.filter(result => result.card_id === this.props.id))
    .then(results => this.setState({listItems: results}))
  }

  displayItems = () => {
    return this.state.listItems.map(item => <li key={item.list_id}>{item.item}</li>)
  }

  render() {
    return(
      <div>
        <h1>{this.props.name}</h1>
        <ul>
          {this.displayItems()}
        </ul>
      </div>
    )
  }
}


export default Card

