import * as types from './ActionTypes';
import {initialState, giphyState, authState, firebaseState, hearthstoneCardsState, loveCalculatorState} from './IntitialState';
import firebaseConfig from './firebaseConfig';

export default {
  firebaseConfig: firebaseConfig,
  hearthstoneCardsState: hearthstoneCardsState,
  firebaseState: firebaseState,
  initialState: initialState,
  giphyState: giphyState,
  authState: authState,
  loveCalculatorState: loveCalculatorState,
  types: types,
}
