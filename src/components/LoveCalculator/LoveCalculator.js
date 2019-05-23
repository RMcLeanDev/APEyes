import React from 'react';
import {connect} from 'react-redux';
import {getLoveCalculations} from './../../actions/loveCalculatorActions';
import styled from 'styled-components'

function LoveCalculator({dispatch, results}){
  console.log(results)
  const Div = styled.div`
    background-color: white;
  `;
  let displayResults;
  let title;
  if(results.error){
    displayResults = <h1>{results.error}</h1>
  } else if (results.percentage){
    if(results.percentage > 50){
      title = "Congrats you are over 50%"
    } else if(results.percentage <= 50){
      title = "Doesn't look to good, but good luck"
    }
    displayResults = <h1>{title}</h1>
  }
  function sendNames(e){
    e.preventDefault()
    dispatch(getLoveCalculations())
  }
  return(
    <div>
      <h1>Love Calculator</h1>
      <form onSubmit={sendNames}>
        <input placeholder="Name 1"/>
        <input placeholder="Name 2"/>
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
