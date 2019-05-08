import * as types from './../constants/ActionTypes';

export const testFunction = () => ({
  type: types.TEST_FUNCTION
})

let a;

export function getGif(info, num){
  return function (dispatch){
    info = info.replace(' ', '+');
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${info}&api_key=${process.env.GIPHY_API}&limit=${num}`).then(
      response => response.json(),
      error => console.log("Error is:", error)
    ).then(function(json) {
      dispatch(initialGifs(json))
      a = 10;
    })
  }
}

export function moreGifs(info, num){
  return function (dispatch){
    info = info.replace(' ', '+');
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${info}&api_key=${process.env.GIPHY_API}&limit=${num + a}`).then(
      response => response.json(),
      error => console.log("Error is:", error)
    ).then(function(json) {
      dispatch(addGif(json))
      a = a + 10;
      console.log(a)
    })
  }
}

export const initialGifs = (info) => ({
  type: types.INITIAL_GIFS,
  info
})

export const addGif = (info) => ({
  type: types.ADD_GIFS,
  info
})
