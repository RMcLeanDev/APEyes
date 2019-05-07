import constants from './../constants';
const {giphyState, types} = constants;

const giphyReducer = (state = giphyState, action) => {
  let newState;
  switch (action.type) {
    case types.TEST_FUNCTION:
      newState = null;
      console.log(giphyState)
      return newState;
    case types.ADD_GIFS:
      newState = Object.assign({}, giphyState);
      console.log(newState)
    default:
      return state;
  }
}

export default giphyReducer
