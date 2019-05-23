import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/Routes';

function AllApis(){
  const Div = styled.div`
    .imgs{
      display: grid;
      width: 98vw;
      margin: auto;
      grid-template-columns: calc(50% - 5px) calc(50% - 5px);
      grid-gap: 10px;
      a {
        height: 100%;
        transition: .2s linear;
        justify-self: center;
        img {
          height: 100%;
          width: 100%;
        }
        &:hover{
          box-shadow: 0px 0px 10px black;
        }
      }
    }
  `;
  return(
    <Div>
      <h1>All Api&#39;s</h1>
      <div className='imgs'>
        <Link to={ROUTES.GIPHY_API}><img src={require('../assets/apiimgs/giphyApiGif.gif')}/></Link>
        <Link to={ROUTES.HEARTHSTONE_API}><img src={require('../assets/apiimgs/hearthstone.jpg')}/></Link>
        <Link to={ROUTES.LOVE_CALCULATOR}><img src={require('../assets/apiimgs/loveCalculator.jpg')}/></Link>
      </div>
    </Div>
  )
}

export default AllApis;
