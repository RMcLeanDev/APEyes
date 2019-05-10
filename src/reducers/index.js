import {combineReducers} from 'redux';
import giphyReducer from './giphyReducer';
import sessionReducer from './sessionReducer'

const rootReducer = combineReducers({
  giphyState: giphyReducer,
  sessionState: sessionReducer
})

export default rootReducer;
