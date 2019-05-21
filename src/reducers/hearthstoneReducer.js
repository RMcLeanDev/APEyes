import constants from './../constants';
const {hearthstoneCardsState, types} = constants;

const hearthstoneReducer = (state = hearthstoneCardsState, action) => {
  let newState;
  switch (action.type) {
    case types.HEARTHSTONE_ADD_INFORMATION:
      newState = state;
      newState = action.info;
      return newState;
    default:
      return state;
  }
}

export default hearthstoneReducer;
