
import * as React from 'react';
import {NavLink} from 'react-router-dom';
import navicons from '../UtilsUI/Icons';
import * as routes from '../Constants/Routes';


export default class Navigation extends React.Component {
   render() {
      return (       
         <ul className="navi-list">

            <li className="navi-heading">
               <span>Pr</span>
            </li>

            <li className="navi-item">
               <NavLink exact={true} to={routes.SIGN_IN} activeClassName="active" title="Dashboard">
                  {navicons.dashboard}
                  <span className="pagename">Dashboard</span>
               </NavLink>
            </li>

            <li className="navi-item">
               <NavLink exact={true} to={routes.LANDING} activeClassName="active" title="Create Character">
                  {navicons.createchar}
                  <span className="pagename">Create Character</span>
               </NavLink>
            </li>

            <li className="navi-item">
               <NavLink exact={true} to={routes.HOME} activeClassName="active" title="Soon™">
                  {navicons.soon}
                  <span className="pagename">Soon™</span>
               </NavLink>
            </li>

            <li className="navi-heading">
               <span>Se</span>
            </li>

            <li className="navi-item">
               <NavLink exact={true} to={routes.ACCOUNT} activeClassName="active" title="Missions">
                  {navicons.missions}
                  <span className="pagename">Gallery</span>
               </NavLink>
            </li>

         </ul>
      );
   }
}

