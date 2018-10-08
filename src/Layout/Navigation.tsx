
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
               <NavLink to={routes.SIGN_IN} activeClassName="active" title="Dashboard">
                  {navicons.dashboard}
                  <span className="pagename">Sign In</span>
               </NavLink>
            </li>

            <li className="navi-item">
               <NavLink to={routes.SIGN_UP} activeClassName="active" title="Dashboard">
                  {navicons.dashboard}
                  <span className="pagename">Sign Up</span>
               </NavLink>
            </li>

            <li className="navi-item">
               <NavLink to={routes.LANDING} activeClassName="active" title="Create Character">
                  {navicons.createchar}
                  <span className="pagename">Landing</span>
               </NavLink>
            </li>

            <li className="navi-item">
               <NavLink to={routes.HOME} activeClassName="active" title="Soon™">
                  {navicons.soon}
                  <span className="pagename">Home™</span>
               </NavLink>
            </li>

            <li className="navi-item">
               <NavLink to={routes.ACCOUNT} activeClassName="active" title="Missions">
                  {navicons.missions}
                  <span className="pagename">Account</span>
               </NavLink>
            </li>

            <li className="navi-item">
               <NavLink to={routes.PASSWORD_FORGET} activeClassName="active" title="Missions">
                  {navicons.missions}
                  <span className="pagename">Forgot password</span>
               </NavLink>
            </li>

         </ul>
      );
   }
}

