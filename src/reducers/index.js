import {combineReducers} from 'redux';
import giphyReducer from './giphyReducer';
import firebaseReducer from './firebaseReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';
import hearthstoneReducer from './hearthstoneReducer';

const rootReducer = combineReducers({
  giphyState: giphyReducer,
  firebaseState: firebaseReducer,
  hearthstoneState: hearthstoneReducer,
  authState: authReducer,
  userState: userReducer
});

export default rootReducer;
