import { combineReducers } from 'redux';
import { cardReducer } from './cardReducer'
import { currentCardReducer } from './currentCardReducer.js'

const rootReducer = combineReducers({
    cards: cardReducer,
    currentCard: currentCardReducer
});

export default rootReducer