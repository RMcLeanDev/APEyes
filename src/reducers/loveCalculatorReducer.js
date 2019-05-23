import constants from './../constants';
const {loveCalculatorState, types} = constants

const loveCalculatorReducer = (state = loveCalculatorState, action) => {
  let newState;
  switch (action.type) {
    case types.SET_LOVE_INFO:
      newState = state;
        if(action.info){
          newState = action.info
        } else {
          newState = {error: "Try Again"}
        }
      return newState;
    default:
      return state;
  }
}

export default loveCalculatorReducer;
