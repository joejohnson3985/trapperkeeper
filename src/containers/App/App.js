import React, { Component } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { createCard } from '../../actions';
import fetchCards from '../../thunks/fetchCards';
import Header from '../../components/Header';
import Form from '../Form';
import CardContainer from '../CardContainer'
import { setCurrentCard } from '../../actions';
import notFound from '../../components/NotFound'

class App extends Component {

  componentDidMount = () => {
    this.props.fetchCards('http://localhost:3000/api/v1/cards');
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/new-note' component={Form} />
        <Route path='/notes/:id' 
          render={({ match }) => {
          const card = this.props.cards.find(card => card.id === parseInt(match.params.id));
          if (!card) {
            console.log('No Card');  
          } else {
            this.props.setCard(card)
            return <Form git/>
          }
          }} 
        />
        <Header />
        <Switch>
          <Route exact path='/' component={CardContainer} />
          <Route path='' component={notFound} />
        </Switch>

      </div>
    ); 
  }
}

const mapStateToProps = (state) => ({
  cards: state.cards
});

const mapDispatchToProps = (dispatch) => ({
  setCard: (card) => dispatch(setCurrentCard(card)),
  createCard: (info) => dispatch(createCard(info)),
  fetchCards: (url) => dispatch(fetchCards(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
