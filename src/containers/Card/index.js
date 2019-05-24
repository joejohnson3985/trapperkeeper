import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Card.scss'
import { setCurrentCard } from '../../actions';
import { connect } from 'react-redux';

class Card extends Component {
  
  render() {
    const { id, name, list } = this.props.card
    let cardRoute = `/notes/${id}`
    return(
      <Link className='card' to={cardRoute}>
        <h1>{name}</h1>
        <p>items: {list.length}</p>
      </Link>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCard: (card) => dispatch(setCurrentCard(card))
});


export default connect(null, mapDispatchToProps)(Card)
