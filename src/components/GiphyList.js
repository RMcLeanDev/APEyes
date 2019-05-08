import React from 'react';

function GiphyList(props) {
  return(
    <div>
      <h1>{props.title}</h1>
      <img src={props.url}></img>
    </div>
  )
}

export default GiphyList
