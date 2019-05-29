import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Card.scss';
import deleteCard from '../../thunks/deleteCard';
import trash from '../../media/icons/delete_outline.svg';

export const Card = (props) => {
  const { id, name, list } = props.card
  const cardRoute = `/notes/${id}`

  return(
    <div className='card-outline'>
      <Link className='card' to={cardRoute}>
        <h1>{name}</h1>
        <p>items: {list.length}</p>
      </Link>
      <img className='delete-btn' onClick={(e) => props.deleteCard(id)} src={trash} alt='Delete card' />
    </div>
  )
}

Card.propTypes = {
  deleteCard: PropTypes.func
};

export const mapDispatchToProps = (dispatch) => ({
  deleteCard: (id) => dispatch(deleteCard(id))
});

export default connect(null, mapDispatchToProps)(Card);
