import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components'
import '../scss/styles.scss';
import {connect} from 'react-redux';
import {testFunction} from './../actions';

function Header({dispatch}){
  function testing(){
    dispatch(testFunction());
  }
  const Div = styled.div`
    width: 100%;
    background-color: lightgray;
    display: flex;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    .left{
      margin-left: 10px;
    }
    input {
      width: 500px;
      max-width: 500px;
      min-width: 50px;
      height: 20px;
    }
    .right{
      margin-right: 10px;
    }
  `
  return(
    <Div>
      <p className="left">logo shows menu</p>
      <input className="search" placeholder="Search"/>
      <p onClick={testing} className="right">sign in/ create a account</p>
    </Div>
  )
}

export default connect()(Header)
