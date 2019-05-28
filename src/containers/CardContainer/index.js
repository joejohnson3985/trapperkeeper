import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '../../components/Card/index'
import './CardContainer.scss'
import CreateNew from '../../media/Images/create-new.svg'
import { NavLink } from 'react-router-dom';

class CardContainer extends Component {

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

const mapStateToProps = (state) => ({
  cards: state.cards
})

export default connect(mapStateToProps)(CardContainer)