import constants from './../constants';
const {giphyState, types} = constants;

const giphyReducer = (state = giphyState, action) => {
  let newState;
  switch (action.type) {
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
