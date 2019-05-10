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
      <p onClick={props.verticalView}>vertical</p><p onClick={props.horizontalView}>horizontal</p>
      <Link to={ROUTES.HOME}  onClick={props.closeMenu}>Home</Link>
      <br/>
      <Link to={ROUTES.GIPHY_API} onClick={props.closeMenu}>GiphyAPI</Link>
    </div>
  )
}

export default Menu;
