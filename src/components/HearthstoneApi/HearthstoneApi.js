import React from 'react';
import HearthstoneList from './HearthstoneList';
import {store} from '../../index.js';
import {getHearthstoneCards} from './../../actions';

function HearthstoneApi(){
  function getCards(){
    store.dispatch(getHearthstoneCards())
  }
  return(
    <div>
      <h1>Hearthstone</h1>
      <button onClick={getCards}>cards</button>
      <HearthstoneList/>
    </div>
  )
}

export default HearthstoneApi;
