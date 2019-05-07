import * as types from './../constants/ActionTypes';

export const testFunction = () => ({
  type: types.TEST_FUNCTION
})

export function getGif(info){
  return function (dispatch){
    info = info.replace(' ', '+');
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${info}&api_key=${process.env.GIPHY_API}&limit=5`).then(
      response => response.json(),
      error => console.log("Error is:", error)
    ).then(function(json) {
      dispatch(addGif(json))
    })
  }
}

export const addGif = (info) => ({
  type: types.ADD_GIFS,
  info
})
