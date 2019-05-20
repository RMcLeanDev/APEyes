import React, {useState} from 'react';
import HearthstoneList from './HearthstoneList';
import {store} from '../../index';
import {connect} from 'react-redux';
import {getAllHearthstoneInfo, getAllHearthstoneCards, getSingleHearthstoneCard, getHearthstoneCardSet} from './../../actions';

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

  function searchCardSet(e){
    e.preventDefault();
    store.dispatch(getHearthstoneCardSet(_input.value))
  }

  let thisSearch;
  if(search === "infoSearch"){
    thisSearch = <button onClick={() => store.dispatch(getAllHearthstoneInfo())}>Get Info</button>
  } else if (search === "allCardsSearch"){
    thisSearch = <button onClick={() => store.dispatch(getAllHearthstoneCards())}>Get All Cards</button>
  } else if (search === "singleCardSearch"){
    thisSearch = <form onSubmit={searchSingleCard}>
        <input placeholder="Search Card"
               ref={value => {_input = value}}/>
        <button>search</button>
      </form>
  } else if (search === "cardSetSearch"){
    thisSearch = <form onSubmit={searchCardSet}>
        <input placeholder="Search by Set"
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
        <option value="infoSearch">Patch Notes</option>
        <option value="allCardsSearch">All Cards</option>
        <option value="singleCardSearch">Search for Single Card</option>
        <option value="cardSetSearch">Search by Set</option>
        no <option value="cardClassSearch">Search by Class</option>
        no <option value="cardRaceSearch">Search by Race</option>
        no <option value="cardQualitySearch">Search by Quality</option>
        no <option value="cardTypeSearch">Search by Type</option>
        no <option value="cardFactionSearch">Search by Faction</option>
        no <option value="cardSearchSearch">Search by Search</option>
        no <option value="cardBacksSearch">Search by Backs</option>
      </select>
      <br/>
      {thisSearch}
      <HearthstoneList/>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    cards: state.hearthstoneState
  }
}
export default connect(mapStateToProps)(HearthstoneApi);
