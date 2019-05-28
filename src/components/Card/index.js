import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Card.scss';
import deleteCard from '../../thunks/deleteCard';
import trash from '../../media/icons/delete_outline.svg';

const Card = (props) => {
  const { id, name, list } = props.card
  const cardRoute = `/notes/${id}`
  return(
    <Link className='card' to={cardRoute}>
      <h1>{name}</h1>
      <p>items: {list.length}</p>
      <Link to='/'>
        <img onClick={() => props.deleteCard(id)} src={trash} alt='Delete card' />
      </Link>
    </Link>
  )
}


const mapDispatchToProps = (dispatch) => ({
  deleteCard: (id) => dispatch(deleteCard(id))
});

export default connect(null, mapDispatchToProps)(Card);
