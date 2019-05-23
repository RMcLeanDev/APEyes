import React from 'react';
import styled from 'styled-components'
import {testFunction} from './../actions';
import {connect} from 'react-redux';

function Home({dispatch}){

  function tester(){
    dispatch(testFunction())
  }
  const Div = styled.div`
  h1{
    font-size: 100px;
  }
    img{
      width: 100%;
    }
  `
  return(
    <Div>
      <h1>APEyes</h1>
      <img src={require('../assets/image1.png')}></img>
    </Div>
  )
}

export default connect()(Home)
