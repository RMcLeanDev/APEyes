import React from 'react';
import {connect} from 'react-redux';

function GiphyList(props) {
  /* eslint-disable */
  return(
    <div>
      <h1>{props.title}</h1>
      <img src={props.url}></img>
      <button>hello</button>
    </div>
  )
  /* eslint-enable */
}
export default connect()(GiphyList);
