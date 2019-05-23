import React from 'react';
import {connect} from 'react-redux';
import {getLoveCalculations} from './../../actions/loveCalculatorActions';

function LoveCalculator({dispatch}){
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
        <button onClick={sendNames}>get results</button>
      </form>
    </div>
  )
}

export default connect()(LoveCalculator);
