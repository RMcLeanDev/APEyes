import React, {useState} from 'react';
import HearthstoneList from './HearthstoneList';
import {store} from '../../index';
import {connect} from 'react-redux';
import {getAllHearthstoneInfo, getAllHearthstoneCards, getSingleHearthstoneCard} from './../../actions';

function HearthstoneApi(props){
  const [search, setSearch] = useState(false);
  let _input = null;
  function setSearchOption(event){
    setSearch(event.target.value);
  }

  function searchSingleCard(e){
    e.preventDefault();
    store.dispatch(getSingleHearthstoneCard(_input.value))
  }

  let thisSearch;
  if(search === "info"){
    thisSearch = <button onClick={() => store.dispatch(getAllHearthstoneInfo())}>Get Info</button>
  } else if (search === "allCards"){
    thisSearch = <button onClick={() => store.dispatch(getAllHearthstoneCards())}>Get All Cards</button>
  } else if (search === "singleCard"){
    thisSearch = <form onSubmit={searchSingleCard}>
        <input placeholder="card search"
               ref={value => {_input = value}}/>
        <button>search</button>
      </form>
  }
  return(
    <div>
      <h1>Hearthstone</h1>
      <p>Search by</p>
      <select onChange={setSearchOption}>
        <option>---Search---</option>
        <option value="info">Patch Notes</option>
        <option value="allCards">All Cards</option>
        <option value="singleCard">Search For Single Card</option>
      </select>
      <br/>
      {thisSearch}
      <HearthstoneList/>
    </div>
  )
}

export default connect()(HearthstoneApi);
