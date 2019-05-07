import React from 'react'
import {connect} from 'react-redux';
import {getGif} from './../actions';

function GiphyAPI({dispatch}){

  let _input = null;

  function searchGiphy(event){
    event.preventDefault();
    console.log(_input.value);
    dispatch(getGif(_input.value));
    _input.value = ''
  }

  return(
    <div>
      <h1>GiphyAPI</h1>
      <form onSubmit={searchGiphy}>
        <input
        ref={node => {_input = node}}/>
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default connect()(GiphyAPI);
