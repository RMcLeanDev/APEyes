import constants from './../constants';
const {hearthstoneCardsState, types} = constants;

const hearthstoneReducer = (state = hearthstoneCardsState, action) => {
  let newState;
  switch (action.type) {
    case types.TEST_FUNCTION:
      newState = state
      console.log("firebase Reducer")
      return newState;
    default:
      return state;
  }
}

export default hearthstoneReducer;
