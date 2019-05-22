import React, { Component } from 'react';
// import { connect } from 'react-redux';

class Card extends Component {

  render() {
    return(
      <div>
        <h1>{this.props.name}</h1>
      </div>
    )
  }
}


export default Card

