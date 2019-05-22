import React, {useState} from 'react';
import styled from 'styled-components'
import '../scss/styles.scss';
import SignIn from './SignIn'
import AccountHeader from './AccountHeader';

function Header(props){
  const [displaySignIn, setSignIn] = useState(false)

  const Div = styled.div`
    width: 100%;
    background-color: #41b3a3;
    display: flex;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    border-bottom: 1px solid #41b3a3;
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
  let signInOrAccount

  if(displaySignIn === true){
    signIn = <SignIn closeLogin={() => setSignIn(false)}/>
  } else {
    signIn = null;
  }

  if(props.authUser === false){
    signInOrAccount =
    <div>
      <p className="right" onClick={() => setSignIn(!displaySignIn)}>Login / create a account</p>
      {signIn}
    </div>
  } else {
    signInOrAccount = <AccountHeader/>
  }

  return(
    <Div>
      <p className="left" onClick={props.menuToggle}>logo shows</p>
      <input className="search" placeholder="not working"/>
      {signInOrAccount}
    </Div>
  )
}

export default Header
