import constants from './../constants';
import * as firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database"
import {store} from './../index'
const {types, firebaseConfig} = constants;

firebase.initializeApp(firebaseConfig);

let database = firebase.database()
let auth = firebase.auth()
let user = firebase.auth().currentUser;

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    store.dispatch(authUserTrue());
  } else {
    store.dispatch(authUserFalse());
  }
});


export function watchMessages(){
  return function(dispatch){
    database.ref('messages').on('child_added', data => {
      const newMessage = Object.assign({}, data.val(), {
        id: data.key,
      })
      dispatch(recieveMessage(newMessage))
    })
  }
}

function recieveMessage(messageFromFirebase){
  return {
    type: types.RECIEVE_MESSAGE,
    message: messageFromFirebase
  }
}

export function signOut(){
    return () => auth.signOut()
}

export const testFunction = () => ({
  type: types.TEST_FUNCTION
})

let a;

export function getGif(info, num){
  return function (dispatch){
    info = info.replace(' ', '+');
    return fetch(`https://api.giphy.com/v1/gifs/search?q=${info}&api_key=${process.env.GIPHY_API}&limit=${num}`).then(
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
    return fetch(`https://api.giphy.com/v1/gifs/search?q=${info}&api_key=${process.env.GIPHY_API}&limit=${num + a}`).then(
      response => response.json(),
      error => console.log("Error is:", error)
    ).then(function(json) {
      dispatch(addGif(json))
      a = a + 10;
    })
  }
}

export const authUserTrue = () => ({
  type: types.AUTH_USER
})

export const authUserFalse = () => ({
  type: types.AUTH_FALSE
})

export const initialGifs = (info) => ({
  type: types.INITIAL_GIFS,
  info
})

export const addGif = (info) => ({
  type: types.ADD_GIFS,
  info
})
