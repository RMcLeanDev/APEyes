import React from 'react';
import styled from 'styled-components'
import {testFunction} from './../actions';
import {connect} from 'react-redux';

function Home({dispatch}){

  function tester(){
    dispatch(testFunction())
  }
  const Something = styled.h1`
  @keyframes pulse {
    0%{color: hotpink}
    50%{color: limegreen}
    100%{color: hotpink}
  }
    animation: pulse 1s linear infinite;
    color: green;
    &:hover {
      cursor: pointer;
      animation: none;
      color: black;
    }
  `
  return(
    <div>
      <Something>Welcome to the home component</Something>
      <button onClick={tester}>click me</button>
    </div>
  )
}

export default connect()(Home)
