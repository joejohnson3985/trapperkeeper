import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { createCard } from '../../actions';
import Header from '../../components/Header';
import Form from '../Form';

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
    </div>
  );
}

const mapStateToProps = (state) => ({
  cards: state.cards
});

const mapDispatchToProps = (dispatch) => ({
  createCard: (info) => dispatch(createCard(info))
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
