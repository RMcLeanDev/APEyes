import React from 'react';
import {connect} from 'react-redux';
import {getLoveCalculations} from './../../actions/loveCalculatorActions';
import styled from 'styled-components'

function LoveCalculator({dispatch, results}){

  let _name1 = null;
  let _name2 = null;

  const Div = styled.div`
  .thisimg{
    overflow: hidden;
    height: ${results.percentage}px;
    img{
      height: 100px;
      width: auto;
    }
  }
  `;

  let displayResults;
  let title;
  if(results.error){
    displayResults = <h1>{results.error}</h1>
  } else if (results.percentage){
    if(results.percentage >= 0 && results.percentage <= 24){
      title = `DONT DO IT!!! YOUR MATCH IS ONLY ${results.percentage}%`
    } else if(results.percentage >= 25 && results.percentage <= 49){
      title = `Doesn't look to good with a match rating of ${results.percentage}%`
    } else if(results.percentage >= 50 && results.percentage <= 74){
      title = `You have a decent match rating with a ${results.percentage}%`
    } else if(results.percentage >= 75 && results.percentage <= 89){
      title = `You two have a really good change with a match rating of ${results.percentage}%`
    } else if(results.percentage >= 90 && results.percentage <=100){
      title = `You two have a amazing match rating of ${results.percentage}%`
    }
    displayResults =
    <Div>
      <h1>Your results {results.fname} and {results.sname} are:</h1>
      <div className="thisimg">
        <img src={require('../../assets/images/heart.png')}/>
      </div>
      <h1>{title}</h1>
    </Div>
  }
  function sendNames(e){
    e.preventDefault()
    dispatch(getLoveCalculations(_name1.value, _name2.value))
  }
  return(
    <div>
      <h1>Love Calculator</h1>
      <p>This api is fun to play with but you'll see that more than 50% of the time you'll get <span className="tryAgain">try again</span>. It's not a bug it's just that the api doesn't always send the api call correctly. So if you see <span className="tryAgain">try again</span> then keep clicking get results and eventually you will get something back.</p>
      <form onSubmit={sendNames}>
        <input placeholder="Name 1" ref={value => {_name1 = value}}/>
        <input placeholder="Name 2" ref={value => {_name2 = value}}/>
        <button type="submit" onClick={sendNames}>get results</button>
      </form>
      {displayResults}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    results: state.loveCalculatorState
  }
}
export default connect(mapStateToProps)(LoveCalculator);
