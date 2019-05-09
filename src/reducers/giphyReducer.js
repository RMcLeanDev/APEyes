import constants from './../constants';
import firebase from 'firebase/app';
const {giphyState, types} = constants;

const giphyReducer = (state = giphyState, action) => {
  let newState;
  switch (action.type) {
    case types.TEST_FUNCTION:
      newState = state.slice()
      firebase.auth().onAuthStateChanged(function(user) {
        console.log(user.uid)
      })
      console.log("hhhhhh")
      return newState;
    case types.INITIAL_GIFS:
      newState = state.slice();
      newState = newState.splice(0, -1)
      action.info.data.forEach(function(el) {
        newState.push(el);
      })
      console.log(newState)
      return newState;
    case types.ADD_GIFS:
      newState = [];
      action.info.data.forEach(function(el) {
        newState.push(el);
      })
      return newState;
    default:
      return state;
  }
}

export default giphyReducer
