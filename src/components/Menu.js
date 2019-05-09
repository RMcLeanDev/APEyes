import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/Routes';


function Menu(){
  const Div = styled.div`
    position: fixed;
    top 50px;
    width: 300px;
    height: 100vh;
    background-color: red;
  `
  return(
    <Div>
      <p>this is the menu component</p>
      <Link to={ROUTES.GIPHY_API}>GiphyAPI</Link>
    </Div>
  )
}

export default Menu;
