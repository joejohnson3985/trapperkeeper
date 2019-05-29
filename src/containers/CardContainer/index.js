import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '../Card/index'
import './CardContainer.scss'
import CreateNew from '../../media/Images/create-new.svg'
import { NavLink } from 'react-router-dom';

export class CardContainer extends Component {
  constructor() {
    super()
    this.state = {
      update: false
    }
  }


  render() {
    const { cards } = this.props 
    const displayCards =  cards.map(card => <Card card={card} key={card.id}/>)
    return (
                                    
      <div className='card-container'>
        <NavLink to='/new-note' className='create-card-btn'>
          <img src={CreateNew} className='createNew' alt='Create new card plus sign icon'/>
        </NavLink>
        {displayCards}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  cards: state.cards
})

export default connect(mapStateToProps)(CardContainer)

