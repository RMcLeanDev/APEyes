import React from 'react';
import {connect} from 'react-redux';
import {signOut} from './../actions';

function Account(props){
  function logout(){
    const {dispatch} = props
    dispatch(signOut());
  }
  return (
    <div>
      <h1>Account Component</h1>
      <button onClick={logout}>Sign Out</button>
    </div>
  )
}

export default connect()(Account)
