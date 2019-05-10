import constants from './../constants';
const {initialState, types} = constants

const firebaseReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case types.TEST_FUNCTION:
      newState = state.slice()
      console.log("firebase Reducer")
      return newState;
    default:
      return state;
  }
}

export default firebaseReducer
