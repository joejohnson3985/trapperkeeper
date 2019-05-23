import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Card.scss'

const Card = ({list, name}) => {
  // const newList = list.map(item => <li key={item.list_id}>{item.item}</li>)
  return(
    <div className='card'>
      <Link>{name}</Link>
    </div>
  )
}


export default Card

