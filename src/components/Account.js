import React from 'react';
import {connect} from 'react-redux';

function Account(){
  return (
    <div>
      <h1>Account Component</h1>
    </div>
  )
}

export default connect()(Account)
