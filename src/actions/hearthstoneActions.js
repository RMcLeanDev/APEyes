import constants from './../constants';
import {store} from './../index';
let unirest = require('unirest');
const {types} = constants;

export const addInformation = (info) => ({
  type: types.HEARTHSTONE_ADD_INFORMATION,
  info
})

export function getAllInfo(){
  return dispatch => {
    unirest.get("https://omgvamp-hearthstone-v1.p.rapidapi.com/info")
    .header("X-RapidAPI-Host", "omgvamp-hearthstone-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", process.env.RAPID_API_KEY)
    .then(function (json) {
    if(json.body.error){
      dispatch(addInformation({error: json.body.message}))
    } else {
    dispatch(addInformation({info: json.body}));
    }
    });
  }
}

export function getAllCards(){
  return dispatch => {
    unirest.get("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards")
    .header("X-RapidAPI-Host", "omgvamp-hearthstone-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", process.env.RAPID_API_KEY)
    .then(function (json) {
    if(json.body.error){
      dispatch(addInformation({error: json.body.message}))
    } else {
    dispatch(addInformation({allCards: json.body}));
    }
    });
  }
}

export function getSingleCard(input){
  return dispatch => {
    unirest.get(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${input}`)
    .header("X-RapidAPI-Host", "omgvamp-hearthstone-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", process.env.RAPID_API_KEY)
    .then(function (json) {
    if(json.body.error){
      dispatch(addInformation({error: json.body.message}))
    } else {
    dispatch(addInformation({singleCard: json.body}));
    }
  });
  }
}

export function getCardSet(input){
  return dispatch => {
    unirest.get(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/${input}`)
    .header("X-RapidAPI-Host", "omgvamp-hearthstone-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", process.env.RAPID_API_KEY)
    .then(function (json) {
    if(json.body.error){
      dispatch(addInformation({error: json.body.message}))
    } else {
    dispatch(addInformation({cardSet: json.body}));
    }
  });
  }
}

export function getCardsByClass(input){
  return dispatch => {
    unirest.get(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/${input}`)
    .header("X-RapidAPI-Host", "omgvamp-hearthstone-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", process.env.RAPID_API_KEY)
    .then(function (json) {
    if(json.body.error){
      dispatch(addInformation({error: json.body.message}))
    } else {
    dispatch(addInformation({cardClass: json.body}));
    }
  });
  }
}

export function getCardsByRace(input){
  return dispatch => {
    unirest.get(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/races/${input}`)
    .header("X-RapidAPI-Host", "omgvamp-hearthstone-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", process.env.RAPID_API_KEY)
    .then(function (json) {
    if(json.body.error){
      dispatch(addInformation({error: json.body.message}))
    } else {
    dispatch(addInformation({cardRace: json.body}));
    }
  });
  }
}

export function getCardsByQuality(input){
  return dispatch => {
    unirest.get(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/qualities/${input}`)
    .header("X-RapidAPI-Host", "omgvamp-hearthstone-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", process.env.RAPID_API_KEY)
    .then(function (json) {
    if(json.body.error){
      dispatch(addInformation({error: json.body.message}))
    } else {
      dispatch(addInformation({cardQuality: json.body}));
    }
  });
  }
}

export function getCardsByType(input){
  return dispatch => {
    unirest.get(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/types/${input}`)
    .header("X-RapidAPI-Host", "omgvamp-hearthstone-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", process.env.RAPID_API_KEY)
    .then(function (json) {
    if(json.body.error){
      dispatch(addInformation({error: json.body.message}))
    } else {
      dispatch(addInformation({cardType: json.body}));
    }
  });
  }
}

export function getCardsByFaction(input){
  return dispatch => {
    unirest.get(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/factions/${input}`)
    .header("X-RapidAPI-Host", "omgvamp-hearthstone-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", process.env.RAPID_API_KEY)
    .then(function (json) {
    if(json.body.error){
      dispatch(addInformation({error: json.body.message}))
    } else {
    dispatch(addInformation({cardFaction: json.body}));
    }
  });
  }
}

export function generalSearch(input){
  return dispatch => {
    unirest.get(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${input}`)
    .header("X-RapidAPI-Host", "omgvamp-hearthstone-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", process.env.RAPID_API_KEY)
    .then(function (json) {
    if(json.body.error){
      dispatch(addInformation({error: json.body.message}))
    } else {
    dispatch(addInformation({generalSearch: json.body}));
    }
  });
  }
}

export function cardbacks(){
  return dispatch => {
    unirest.get(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cardbacks`)
    .header("X-RapidAPI-Host", "omgvamp-hearthstone-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", process.env.RAPID_API_KEY)
    .then(function (json) {
    if(json.body.error){
      dispatch(addInformation({error: json.body.message}))
    } else {
    dispatch(addInformation({cardbacks: json.body}));
    }
  });
  }
}
