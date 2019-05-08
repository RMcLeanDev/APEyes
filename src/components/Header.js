import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import '../scss/styles.scss';
import {connect} from 'react-redux';

function Header({dispatch}){
  const Div = styled.div`
    width: 100%;
    background-color: lightgray;
    display: flex;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
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
      text-decoration: none;
    }
  `
  return(
    <Div>
      <p className="left">logo shows menu</p>
      <input className="search" placeholder="Search"/>
      <p className="right"><Link to='/'>sign in/ create a account</Link></p>
    </Div>
  )
}

export default connect()(Header)
