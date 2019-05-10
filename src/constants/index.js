import * as types from './ActionTypes';
import {initialState, giphyState, sessionState} from './IntitialState';
import firebaseConfig from './firebaseConfig';

export default {
  firebaseConfig: firebaseConfig,
  initialState: initialState,
  giphyState: giphyState,
  sessionState: sessionState,
  types: types
}
