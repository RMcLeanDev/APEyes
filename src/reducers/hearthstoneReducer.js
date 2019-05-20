import constants from './../constants';
const {hearthstoneCardsState, types} = constants;

const hearthstoneReducer = (state = hearthstoneCardsState, action) => {
  let newState;
  switch (action.type) {
    default:
      return state;
  }
}

export default hearthstoneReducer;
