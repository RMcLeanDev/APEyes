import React, {useState} from 'react';
import {connect} from 'react-redux';
import {signOut} from './../actions';
import styled from 'styled-components'

function Account(props){
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
      border: 1px solid red;
      position: absolute;
      top: 50px;
    }
  `
  let dropDown;
  if (menu){
    dropDown =  <div className="dropdown">
                  <p>menu</p>
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
export default connect(mapStateToProps)(Account)
