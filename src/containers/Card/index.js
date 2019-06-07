import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Card.scss';
import deleteCard from '../../thunks/deleteCard';
import trash from '../../media/icons/delete_outline.svg';
import box from '../../media/icons/check_box_blank.svg';
import checkedBox from '../../media/icons/check_box.svg';


export class Card extends Component {

  displayItems = () => {
    const { list } = this.props.card
    return list.map(item => {
      return (
        <div className='item'>
          <img className='icon check-box' src={item.checked ? checkedBox : box} alt='Checkbox' />
          <p>{item.item}</p>
        </div>
      )
    })
  }

  render(){
    const { id, name } = this.props.card
    const cardRoute = `/notes/${id}`
    return (
      <div className='card-outline'>
        <Link className='card' to={cardRoute}>
          <h1>{name}</h1>
          {this.displayItems()}
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
