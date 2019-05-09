import React, {useState} from 'react';
import styled from 'styled-components'
import '../scss/styles.scss';
import {connect} from 'react-redux';
import SignIn from './SignIn'


function Header(props){
  const [displaySignIn, setSignIn] = useState(false)

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
      &:hover{
        cursor: pointer;
        text-decoration: underline;
      }
    }
  `

  let signIn;
  if(displaySignIn === true){
    signIn = <SignIn closeLogin={() => setSignIn(false)}/>
  } else {
    signIn = null;
  }

  return(
    <Div>
      <p className="left" onClick={props.menuToggle}>logo shows menu</p>
      <input className="search" placeholder="Search"/>
      <p className="right" onClick={() => setSignIn(true)}>Login / create a account</p>
      {signIn}
    </Div>
  )
}

export default connect()(Header)
