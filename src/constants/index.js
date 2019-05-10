import * as types from './ActionTypes';
import {initialState, giphyState, authState} from './IntitialState';
import firebaseConfig from './firebaseConfig';

export default {
  firebaseConfig: firebaseConfig,
  initialState: initialState,
  giphyState: giphyState,
  authState: authState,
  types: types,
}
