import React from 'react';
import {connect} from 'react-redux';

function GiphyList(props) {
  function tester(){
    console.log(props.title)
  }
  /* eslint-disable */
  return(
    <div>
      <h1>{props.title}</h1>
      <img src={props.url}></img>
      <button onClick={tester}>hi</button>
    </div>
  )
  /* eslint-enable */
}
export default connect()(GiphyList);
