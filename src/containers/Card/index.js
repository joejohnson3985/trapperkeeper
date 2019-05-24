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
    this.props.setCard(this.props.card)
  }


  render() {
    const { id, name } = this.props.card
    let cardRoute = `/notes/${id}`
    return(
      <div className='card'>
        <Link onClick={this.openCard} to={cardRoute}>{name}</Link>
      </div>

    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCard: (card) => dispatch(setCurrentCard(card))
});


export default connect(null, mapDispatchToProps)(Card)