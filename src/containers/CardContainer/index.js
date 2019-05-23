import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '../Card'

class CardContainer extends Component {

  render() {
    const { cards } = this.props 
    const displayCards =  cards.map(card => <Card {...card} key={card.id}/>)
    return (
      <div>
        {displayCards}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cards: state.cards
})

export default connect(mapStateToProps)(CardContainer)