import * as types from './ActionTypes';
import {initialState, giphyState, authState, firebaseState, hearthstoneCardsState} from './IntitialState';
import firebaseConfig from './firebaseConfig';

export default {
  firebaseConfig: firebaseConfig,
  hearthstoneCardsState: hearthstoneCardsState,
  firebaseState: firebaseState,
  initialState: initialState,
  giphyState: giphyState,
  authState: authState,
  types: types,
}
