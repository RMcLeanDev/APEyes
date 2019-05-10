import {combineReducers} from 'redux';
import giphyReducer from './giphyReducer';
import firebaseReducer from './firebaseReducer';

const rootReducer = combineReducers({
  giphyState: giphyReducer,
  firebaseState: firebaseReducer
});

export default rootReducer;
