import React from 'react';
import { Link } from 'react-router-dom'
import './Card.scss'

const Card = (props) => {
  const { id, name, list } = props.card
  const cardRoute = `/notes/${id}`
  return(
    <Link className='card' to={cardRoute}>
      <h1>{name}</h1>
      <p>items: {list.length}</p>
    </Link>
  )
}


export default Card;
