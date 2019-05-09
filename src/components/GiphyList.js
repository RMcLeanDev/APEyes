import React from 'react';
import {connect} from 'react-redux';
import {testFunction} from './../actions';

function GiphyList(props) {
  function test(){
    const {dispatch} = props;
    dispatch(testFunction())
  }
  return(
    <div>
      <h1>{props.title}</h1>
      <img src={props.url}></img>
      <button onClick={test}>hello</button>
    </div>
  )
}
export default connect()(GiphyList);
