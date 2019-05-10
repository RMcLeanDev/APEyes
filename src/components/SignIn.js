import React, {useState} from 'react';
import * as ROUTES from '../constants/Routes';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {connect} from 'react-redux';
import {logIn} from './../actions';

function SignIn(props){
  let _email = ''
  let _password = ''

  const [errorMessage, setError] = useState(null)

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

  function signIn(event) {
    event.preventDefault();
    const {dispatch} = props
      dispatch(logIn(_email.value, _password.value)).then(error => {
      if(error.message){
        return setError(error.message)
      }
      props.closeLogin()
    })
  }
  return(
    <Login>
      <p className="exit" onClick={props.closeLogin}>&#10005;</p>
      <form onSubmit={signIn}>
        <input
          type="text"
          placeholder="email"
          ref={(input) => {_email = input;}}/>
        <input
          type="password"
          placeholder="password"
          ref={(input) => {_password = input;}}/>
        <button type="submit">Sign In</button>
        <hr/>
        <p>Don&#39;t have a account? <br/><Link to={ROUTES.SIGN_UP} onClick={props.closeLogin}>Make one here.</Link></p>
      </form>
      {errorMessage}
    </Login>
  )
}

export default connect()(SignIn)
