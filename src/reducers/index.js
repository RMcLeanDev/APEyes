import {combineReducers} from 'redux';
import giphyReducer from './giphyReducer';
import firebaseReducer from './firebaseReducer';
import authReducer from './authReducer'

const rootReducer = combineReducers({
  giphyState: giphyReducer,
  firebaseState: firebaseReducer,
  authState: authReducer
});

export default rootReducer;
