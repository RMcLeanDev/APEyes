import React, {useState} from 'react';
import HearthstoneList from './HearthstoneList';
import {store} from '../../index';
import {connect} from 'react-redux';
import {getAllInfo, getAllCards, getSingleCard, getCardSet, getCardsByClass, getCardsByRace, getCardsByQuality, getCardsByType, getCardsByFaction, generalSearch, cardbacks} from './../../actions/hearthstoneActions';

function HearthstoneApi(props){
  const [search, setSearch] = useState(false);
  let _input = null;

  console.log(props.cards)

  function setSearchOption(event){
    setSearch(event.target.value);
  }

  function searchSingleCard(e){
    e.preventDefault();
    store.dispatch(getSingleCard(_input.value))
  }

  function searchCardSet(e){
    e.preventDefault();
    store.dispatch(getCardSet(_input.value))
  }

  function searchClassSet(e){
    e.preventDefault();
    store.dispatch(getCardsByClass(_input.value))
  }

  function searchRaceSet(e){
    e.preventDefault();
    store.dispatch(getCardsByRace(_input.value))
  }

  function searchQualitySet(e){
    e.preventDefault();
    store.dispatch(getCardsByQuality(_input.value))
  }

  function searchTypeSet(e){
    e.preventDefault();
    store.dispatch(getCardsByType(_input.value))
  }

  function searchFactionSet(e){
    e.preventDefault();
    store.dispatch(getCardsByFaction(_input.value))
  }

  function searchCards(e){
    e.preventDefault();
    store.dispatch(generalSearch(_input.value))
  }

  let thisSearch;
  if(search === "infoSearch"){
    thisSearch = <button onClick={() => store.dispatch(getAllInfo())}>Get Info</button>
  } else if (search === "allCardsSearch"){
    thisSearch = <button onClick={() => store.dispatch(getAllCards())}>Get All Cards</button>
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
  } else if (search === "cardClassSearch"){
    thisSearch = <form onSubmit={searchClassSet}>
        <input placeholder="Search by Class"
               ref={value => {_input = value}}/>
        <button>search</button>
      </form>
  } else if (search === "cardRaceSearch"){
    thisSearch = <form onSubmit={searchRaceSet}>
        <input placeholder="Search by Race"
               ref={value => {_input = value}}/>
        <button>search</button>
      </form>
  } else if (search === "cardQualitySearch"){
    thisSearch = <form onSubmit={searchQualitySet}>
        <input placeholder="Search by Quality"
               ref={value => {_input = value}}/>
        <button>search</button>
      </form>
  } else if (search === "cardTypeSearch"){
    thisSearch = <form onSubmit={searchTypeSet}>
        <input placeholder="Search by Type"
               ref={value => {_input = value}}/>
        <button>search</button>
      </form>
  } else if (search === "cardFactionSearch"){
    thisSearch = <form onSubmit={searchFactionSet}>
        <input placeholder="Search by Faction"
               ref={value => {_input = value}}/>
        <button>search</button>
      </form>
  } else if (search === "cardSearch"){
    thisSearch = <form onSubmit={searchCards}>
        <input placeholder="Search any cards"
               ref={value => {_input = value}}/>
        <button>search</button>
      </form>
  } else if (search === "cardBacksSearch"){
    thisSearch = <button onClick={() => store.dispatch(cardbacks())}>See all avaliable cardbacks</button>
  }
  let num;

  return(
    <div>
      <h1>Hearthstone</h1>
      <p>Search by</p>
      <select onChange={setSearchOption}>
        <option>---Search---</option>
        <option value="infoSearch">General Information</option>
        <option value="allCardsSearch">All Cards</option>
        <option value="singleCardSearch">Search for Single Card</option>
        <option value="cardSetSearch">Search by Set</option>
        <option value="cardClassSearch">Search by Class</option>
        <option value="cardRaceSearch">Search by Race</option>
        <option value="cardQualitySearch">Search by Quality</option>
        <option value="cardTypeSearch">Search by Type</option>
        <option value="cardFactionSearch">Search by Faction</option>
        <option value="cardSearch">General Search</option>
        <option value="cardBacksSearch">Search by Backs</option>
      </select>
      <br/>
      {thisSearch}
      {Object.keys(props.cards).map(info => {
        let currentInfo = props.cards[info];
        return <div><h1>{info}</h1><p>{currentInfo.toString().replace(',', ', ')}</p></div>
      })}
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
