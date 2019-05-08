import constants from './../constants';
const {giphyState, types} = constants;

const giphyReducer = (state = giphyState, action) => {
  let newState;
  let newGifs;
  switch (action.type) {
    case types.TEST_FUNCTION:
      newState = null;
      console.log(giphyState)
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
