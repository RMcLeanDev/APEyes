import React, {useState} from 'react';
import {connect} from 'react-redux';
import {signOut} from './../actions';
import styled from 'styled-components'

function AccountHeader(props){
  function logout(){
    const {dispatch} = props
    dispatch(signOut());
  }
  const [menu, setMenu] = useState(true);

  const Div = styled.div`
    display: grid;
    align-self: center;
    margin-right: 20px;
    border-radius: 50px;
    height: 40px;
    width: 80px;
    h1{
      align-self: center;
      margin: 0;
      padding: 0;
      font-size: 25px;
      &:hover{
        cursor: pointer;
      }
      img{
        width: 18px;
        height: 18px;
        margin-left: 5px;
      }
    }
    .dropdown{
      background-color: white;
      padding: 5px;
      width: 100px;
      border: 1px solid black;
      position: absolute;
      top: 50px;
      margin-left: -15px
      p{
        margin: 0;
        padding: 0;
      }
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
                  <br/>
                  <br/>
                  <p>{props.user.name}</p>
                  <hr/>
                  <button onClick={logout}>sign out</button>
                </div>
  } else {
    dropDown = null
  }
  // console.log(props)
  return (
    <Div>
      <h1 onClick={() => setMenu(!menu)}>{props.user.initials}<img src={require('../assets/dropdown.png')}/></h1>
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
