import constants from './../constants';
import {store} from './../index';
let unirest = require('unirest');
const {types} = constants;


export function getAllHearthstoneInfo(){
  return dispatch => {
    unirest.get("https://omgvamp-hearthstone-v1.p.rapidapi.com/info")
    .header("X-RapidAPI-Host", "omgvamp-hearthstone-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", process.env.HEARTHSTONE_API_KEY)
    .then(function (json) {
    console.log(json.body);
    });
  }
}

export function getAllHearthstoneCards(){
  return dispatch => {
    unirest.get("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards")
    .header("X-RapidAPI-Host", "omgvamp-hearthstone-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", process.env.HEARTHSTONE_API_KEY)
    .then(function (json) {
    console.log(json.body);
    });
  }
}

export function getSingleHearthstoneCard(input){
  return dispatch => {
    unirest.get(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${input}`)
    .header("X-RapidAPI-Host", "omgvamp-hearthstone-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", process.env.HEARTHSTONE_API_KEY)
    .then(function (json) {
    console.log(json.body);
  });
  }
}

export function getHearthstoneCardSet(input){
  return dispatch => {
    unirest.get(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/${input}`)
    .header("X-RapidAPI-Host", "omgvamp-hearthstone-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", process.env.HEARTHSTONE_API_KEY)
    .then(function (json) {
    console.log(json.body);
  });
  }
}
