import * as types from './ActionTypes';
import {initialState, giphyState} from './IntitialState';
import firebaseConfig from './firebaseConfig';

export default {
  firebaseConfig: firebaseConfig,
  initialState: initialState,
  giphyState: giphyState,
  types: types,
}
