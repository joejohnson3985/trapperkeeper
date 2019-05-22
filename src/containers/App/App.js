import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { createCard } from '../../actions';
import fetchCards from '../../thunks/fetchCards';
import Header from '../../components/Header';
import Form from '../Form';

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount = () => {
    this.props.fetchCards('http://localhost:3000/api/v1/cards');
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form />
      </div>
    ); 
  }
}

const mapStateToProps = (state) => ({
  cards: state.cards
});

const mapDispatchToProps = (dispatch) => ({
  createCard: (info) => dispatch(createCard(info)),
  fetchCards: (url) => dispatch(fetchCards(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
