import React from 'react';
import styled from 'styled-components'

function AllApis(){
  const Div = styled.div`
    .imgs{
      border: 1px solid red;
      display: grid;
      width: 98vw;
      margin: auto;
      grid-template-columns: calc(50% - 5px) calc(50% - 5px);
      grid-gap: 10px;
      img {
        transition: .2s linear;
        justify-self: center;
        width: 100%;
        &:hover{
          box-shadow: 0px 0px 10px black;
        }
      }
    }
  `;
  return(
    <Div>
      <h1>All Api's component</h1>
      <div className='imgs'>
        <img src={require('../assets/apiimgs/giphyApiGif.gif')}/>
        <img src={require('../assets/apiimgs/hearthstone.jpg')}/>
      </div>
    </Div>
  )
}

export default AllApis;
