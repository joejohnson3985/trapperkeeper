import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Card.scss';
import deleteCard from '../../thunks/deleteCard';
import trash from '../../media/icons/delete_outline.svg';
import box from '../../media/icons/check_box_blank.svg';


export class Card extends Component {

  displayUncheckedItems = () => {
    const { list } = this.props.card
    let uncheckedToDisplay =  list.filter(item => !item.checked).map(item => {
      return (
        <div className='item' key={item.id}>
          <img className='icon check-box' src={box} alt='Checkbox' />
          <p>{item.item}</p>
        </div>
      )
    })

    if(uncheckedToDisplay.length) {
      return uncheckedToDisplay
    } else {
      return <p>You've completed every item on this list! Congrats!</p>
    }
  }

  completedItems = () => {
    const { list } = this.props.card
    return list.filter(item => item.checked).length
  }

  render(){
    const { id, name } = this.props.card
    const cardRoute = `/notes/${id}`
    return (
      <div className='card-outline'>
        <Link className='card' to={cardRoute}>
          <h1>{name}</h1>
          {this.displayUncheckedItems()}
          <p>{this.completedItems()} item(s) completed!</p>
        </Link>
        <img className='delete-btn' onClick={(e) => this.props.deleteCard(id)} src={trash} alt='Delete card' />
      </div>
    )
  }

}

Card.propTypes = {
  deleteCard: PropTypes.func
};

export const mapDispatchToProps = (dispatch) => ({
  deleteCard: (id) => dispatch(deleteCard(id))
});

export default connect(null, mapDispatchToProps)(Card);
