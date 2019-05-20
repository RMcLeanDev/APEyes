import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/Routes';


function Menu(props){
  let information;
  if (props.menu){
    if(props.menuRotation === "vertical"){
      information = `menuVer showVer`
    } else {
      information = `menuHor showHor`
    }
  } else {
    if(props.menuRotation === "vertical"){
      information = `menuVer hideVer`
    } else {
      information = `menuHor hideHor`
    }
  }
  return(
    <div className={information}>
      <div className="top">
        <p onClick={props.verticalView}>vertical</p><p onClick={props.horizontalView}>horizontal</p>
      </div>
      <p><Link to={ROUTES.ALL_APIS} onClick={props.closeMenu}>All Api's</Link></p>
      <p><Link to={ROUTES.HOME}  onClick={props.closeMenu}>Home</Link></p>
      <p><Link to={ROUTES.GIPHY_API} onClick={props.closeMenu}>GiphyAPI</Link></p>
      <p><Link to={ROUTES.POKE_API} onClick={props.closeMenu}>Pokemon Api</Link></p>
      <p><Link to={ROUTES.HEARTHSTONE_API} onClick={props.closeMenu}>Hearthstone Api</Link></p>
    </div>
  )
}

export default Menu;
