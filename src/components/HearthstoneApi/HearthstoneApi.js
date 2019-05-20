import React from 'react';
import HearthstoneList from './HearthstoneList';
import {connect} from 'react-redux';
import {getHearthstoneCards} from './../../actions';

function HearthstoneApi({dispatch}){
  function getCards(){
    dispatch(getHearthstoneCards())
  }
  return(
    <div>
      <h1>Hearthstone</h1>
      <button onClick={getCards}>cards</button>
      <HearthstoneList/>
    </div>
  )
}

export default connect()(HearthstoneApi);
