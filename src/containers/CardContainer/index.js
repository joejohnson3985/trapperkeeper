import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '../Card'

class CardContainer extends Component {

  displayCards = () => {
    const { cards } = this.props 
    return cards.map(card => <Card {...card} key={card.id}/>)
  }

  render() {
    return (
      <div>
      {this.displayCards()}
      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  cards: state.cards
})

export default connect(mapStateToProps)(CardContainer)