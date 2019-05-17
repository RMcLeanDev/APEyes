import React, {useState} from 'react';
import {connect} from 'react-redux';
import {signOut} from './../actions';
import styled from 'styled-components'

function AccountHeader(props){
  function logout(){
    const {dispatch} = props
    dispatch(signOut());
  }
  const [menu, setMenu] = useState(false);

  const Div = styled.div`
    display: grid;
    align-self: center;
    margin-right: 20px;
    background-color: red;
    border-radius: 50px;
    height: 40px;
    width: 60px;
    h1{
      align-self: center;
      margin: 0;
      padding: 0;
      font-size: 25px;
    }
    .dropdown{
      p{
        margin: 0;
        padding: 0;
      }
      border: 1px solid red;
      position: absolute;
      top: 50px;
      .menu{
        margin-top: 30px;
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

  `
  let dropDown;
  if (menu){
    dropDown =  <div className="dropdown">
                  <p className="exit" onClick={() => setMenu(false)}>&#10005;</p>
                  <p className="menu">menu</p>
                  <hr/>
                  <p>{props.user.name}</p>
                  <button onClick={logout}>sign out</button>
                </div>
  } else {
    dropDown = null
  }
  console.log(props)
  return (
    <Div>
      <h1 onClick={() => setMenu(true)}>{props.user.initials}</h1>
      {dropDown}
    </Div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.userState
  }
}
export default connect(mapStateToProps)(AccountHeader)
