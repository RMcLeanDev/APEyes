import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

function Header(){
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
      height: 25px;
    }
    .right{
      margin-right: 10px;
    }
  `
  return(
    <Div>
      <p class="left"><Link to='/'>logo links to home</Link></p>
      <input placeholder="Search"/>
      <p class="right">sign in/ create a account</p>
    </Div>
  )
}

export default Header
