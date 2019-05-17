import {combineReducers} from 'redux';
import giphyReducer from './giphyReducer';
import firebaseReducer from './firebaseReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  giphyState: giphyReducer,
  firebaseState: firebaseReducer,
  authState: authReducer,
  userState: userReducer
});

export default rootReducer;
