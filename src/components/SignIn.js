import React from 'react';
import * as ROUTES from '../constants/Routes';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

function SignIn(props){
  const Login = styled.div`
    position: absolute;
    background-color: white;
    right: 0;
    top: 50px;
    width: 180px;
    border: 1px solid black;
    padding: 5px;
    padding-bottom: 10px;
    input{
      margin-top: 10px;
      width: calc(100% - 20px)
    }
    button {
      margin-top: 10px;
    }
    p{
      font-size: 12px;
    }
    a {
      color: black;
      text-decoration: none;
      &:hover{
        cursor: pointer;
        text-decoration: underline;
      }
    }
    .exit{
      padding: 0;
      margin: 0;
      float: right;
      font-size: 20px;
      &:hover{
        cursor: pointer;
      }
    }
  `

  function signIn(e){
    e.preventDefault();
  }
  return(
    <Login>
      <p className="exit" onClick={props.closeLogin}>&#10005;</p>
      <form onSubmit={signIn}>
        <input type="text" placeholder="email"/>
        <input type="password" placeholder="password"/>
        <button type="submit">Sign In</button>
        <hr/>
        <p>Don&#39;t have a account? <br/><Link to={ROUTES.SIGN_UP}>Make one here.</Link></p>
      </form>
    </Login>
  )
}

export default SignIn
