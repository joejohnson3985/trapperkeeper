import React, { Component } from 'react';
import './Card.scss'

const Card = ({list, name}) => {
  const newList = list.map(item => <li key={item.list_id}>{item.item}</li>)
  return(
    <div>
      <h1>{name}</h1>
      <ul>
        {newList}
      </ul>
    </div>
  )
}


export default Card

