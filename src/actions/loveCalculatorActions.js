import constants from './../constants';
let unirest = require('unirest');
const {types} = constants;

export const addLoveInformation = (info) => ({
  type: types.SET_LOVE_INFO,
  info
})

export function getLoveCalculations(n1, n2){
  return dispatch => {
    unirest.get(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${n1}&sname=${n2}`)
    .header("X-RapidAPI-Host", "love-calculator.p.rapidapi.com")
    .header("X-RapidAPI-Key", process.env.RAPID_API_KEY)
    .end(function (result) {
      dispatch(addLoveInformation(result.body));
    });
  }
}
