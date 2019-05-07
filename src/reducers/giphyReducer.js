import constants from './../constants';
const {initialState, types} = constants;

const giphyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TEST_FUNCTION:
      let newState = null;
      console.log("GiphyReducer")
      return newState;
    default:
      return state;
  }
}

export default giphyReducer
