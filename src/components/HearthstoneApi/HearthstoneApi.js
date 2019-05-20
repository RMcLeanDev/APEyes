import React, {useState} from 'react';
import HearthstoneList from './HearthstoneList';
import {connect} from 'react-redux';
import {getAllHearthstoneInfo, getAllHearthstoneCards} from './../../actions';

function HearthstoneApi({dispatch}){
  const [search, setSearch] = useState(false);
  function setSearchOption(event){
    setSearch(event.target.value);
  }

  function getAllCards(){
    dispatch(getAllHearthstoneCards())
  }
  function getInfo(){
    setSearch('allCards')
    dispatch(getAllHearthstoneInfo())
  }
  let thisSearch;
  if(search === "info"){
    thisSearch = <button onClick={getInfo}>Get Info</button>
  } else if (search === "allCards"){
    thisSearch = <button onClick={getAllCards}>Get All Cards</button>
  }
  return(
    <div>
      <h1>Hearthstone</h1>
      <p>Search by</p>
      <select onChange={setSearchOption}>
        <option>---Search---</option>
        <option value="info">Patch Notes</option>
        <option value="allCards">All Cards</option>
      </select>
      {thisSearch}
      <HearthstoneList/>
    </div>
  )
}

export default connect()(HearthstoneApi);
