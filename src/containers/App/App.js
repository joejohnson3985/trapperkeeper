import React, { Component } from 'react';
import './App.css';
import { NavLink, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createCard } from '../../actions';
import fetchCards from '../../thunks/fetchCards';
import Header from '../../components/Header';
import Form from '../Form';
import CardContainer from '../CardContainer'

class App extends Component {

  componentDidMount = () => {
    this.props.fetchCards('http://localhost:3000/api/v1/cards');
  }

  render() {
    return (
      <div className="App">
        <Header />

        <NavLink to='/new-note' className='nav'>Create Card</NavLink>
        <Route exact path='/new-note' component={Form} />
        <CardContainer />

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
