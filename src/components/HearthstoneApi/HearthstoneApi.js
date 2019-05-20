import React, {useState} from 'react';
import HearthstoneList from './HearthstoneList';
import {connect} from 'react-redux';
import {getAllHearthstoneCards} from './../../actions';

function HearthstoneApi({dispatch}){
  const [search, setSearch] = useState('info');

  function getCards(){
    dispatch(getAllHearthstoneCards())
  }
  let thisSearch;
  if(search === "info"){
    thisSearch = <button>Get Info</button>
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
