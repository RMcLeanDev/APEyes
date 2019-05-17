import constants from './../constants';
const {initialState, types} = constants

const userReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case types.SET_USER_INFO:
      newState = state;
        if(action.info.initials){
          newState = {initials: action.info.initials, name: action.info.user.displayName, email: action.info.user.email}
        } else {
          newState = {name: action.info.user.displayName, email: action.info.user.email}
        }
      // console.log(newState)
      return newState;
    default:
      return state;
  }
}

export default userReducer
