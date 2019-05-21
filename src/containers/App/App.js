import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { createCard } from '../../actions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Trapper Keeper</h1>
        <h2>Notebook</h2>
      </header>
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
