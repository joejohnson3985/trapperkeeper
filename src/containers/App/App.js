import React, { Component } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import getCards from '../../thunks/getCards';
import Header from '../../components/Header';
import Form from '../Form';
import CardContainer from '../CardContainer';
import notFound from '../../components/NotFound';

class App extends Component {

  componentDidMount = () => {
    this.props.getCards('http://localhost:3000/api/v1/cards');
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/new-note' component={Form} />
        <Route path='/notes/:id' 
          render={({ match }) => {
            const card = this.props.cards.find(card => card.id === parseInt(match.params.id));
            return card ? <Form cardData={card} git/> : console.log('No Card');
          }} 
        />
        <Header />
        <Switch>
          <Route path='/' component={CardContainer} />
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
  getCards: (url) => dispatch(getCards(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
