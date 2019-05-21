import React from 'react';

function HearthstoneList(props){
  let display;
  if (props.information.length !== 0){
    if(props.information.info){
      display = Object.keys(props.information.info).map(info => {
        let currentInfo = props.information.info[info];
        return <div key={info}><h1>{info}</h1><p>{currentInfo}</p></div>
      })
    } else if(props.information.allCards){
      console.log(props.information.allCards)
      display = Object.keys(props.information.allCards).map(info => {
        let currentInfo = props.information.allCards[info];
        return <div key={info}><h1>{info}</h1>{Object.keys(currentInfo).map(cards => {
          let currentCard = currentInfo[cards];
          return <div key={currentCard.cardId}><p>{currentCard.name}</p></div>
        })}</div>
      })
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
      {display}
    </div>
  )
}

export default HearthstoneList;
