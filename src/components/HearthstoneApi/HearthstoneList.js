import React from 'react';

function HearthstoneList(props){

  if (props.information.length !== 0){
    if(props.information.info){
      console.log('info')
    } else if(props.information.allCards){
      console.log('allCards')
    } else if(props.information.singleCard){
      console.log('singleCard')
    } else if(props.information.cardSet){
      console.log('cardSet')
    } else if(props.information.cardClass){
      console.log('cardClass')
    } else if(props.information.cardRace){
      console.log('cardRace')
    } else if(props.information.cardQuality){
      console.log('cardQuality')
    } else if(props.information.cardType){
      console.log('cardType')
    } else if (props.information.cardFaction){
      console.log('cardFaction');
    } else if (props.information.generalSearch){
      console.log('generalSearch');
    } else if (props.information.cardbacks){
      console.log('cardbacks');
    }
  }
  return(
    <div>
      <h1>List</h1>
    </div>
  )
}

export default HearthstoneList;
