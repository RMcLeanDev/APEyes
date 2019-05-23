import constants from './../constants';
import {store} from './../index';
let unirest = require('unirest');
const {types} = constants;

export function getLoveCalculations(){
  return dispatch => {
    unirest.get("https://love-calculator.p.rapidapi.com/getPercentage?fname=John&sname=Alice")
    .header("X-RapidAPI-Host", "love-calculator.p.rapidapi.com")
    .header("X-RapidAPI-Key", process.env.RAPID_API_KEY)
    .end(function (result) {
      console.log(result.status, result.headers, result.body);
    });
  }
}
