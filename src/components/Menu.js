import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';


function Menu(){
  const Div = styled.div`
    position: absolute;
    width: 300px;
    height: calc(100% - 50px);
    background-color: red;
  `
  return(
    <Div>
      <p>this is the menu component</p>
      <Link to='/giphyApi'>GiphyAPI</Link>
    </Div>
  )
}

export default Menu;
