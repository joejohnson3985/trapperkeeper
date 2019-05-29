import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getCards from '../../thunks/getCards';
import Header from '../../components/Header';
import Form from '../Form';
import CardContainer from '../CardContainer';
import NotFound from '../../components/NotFound';
import './App.scss';

export class App extends Component {

  componentDidMount = () => {
    this.props.getCards('http://localhost:3000/api/v1/cards');
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path='/new-note' component={Form} />
        <Route exact path='/notes/:id' 
          render={({ match }) => {
            const card = this.props.cards.find(card => card.id === parseInt(match.params.id));
            return card ? <Form cardData={card} git/> : <NotFound />;
          }} 
        />
        <Switch>
          <Route path='/' exact component={CardContainer} />
          <Route exact path='/notes/:id' component={CardContainer} />
          <Route exact path='/new-note' component={CardContainer} />
          <Route path='' component={NotFound} />
        </Switch>
      </div>
    ); 
  }
}

App.propTypes = {
  cards: PropTypes.array,
  getCards: PropTypes.func
};

export const mapStateToProps = (state) => ({
  cards: state.cards
});

export const mapDispatchToProps = (dispatch) => ({
  getCards: (url) => dispatch(getCards(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
