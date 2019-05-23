import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router-dom'
import './Card.scss'
import { setCurrentCard } from '../../actions';
import { connect } from 'react-redux';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  openCard = () => {
    console.log('hello')
    this.props.setCard(this.props.card)
  }


  render() {
    const { id, name } = this.props.card
    let cardRoute = `/notes/${id}`
    return(
      <div className='card'>
        <h1 onClick={this.openCard}>{name}</h1>
      </div>

    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCard: (card) => dispatch(setCurrentCard(card))
});


export default connect(null, mapDispatchToProps)(Card)