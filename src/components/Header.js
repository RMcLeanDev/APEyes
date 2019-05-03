import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return(
    <div>
      <h2>THIS IS A HEADER</h2>
      <Link to='/'>Home</Link>
    </div>
  )
}

export default Header
