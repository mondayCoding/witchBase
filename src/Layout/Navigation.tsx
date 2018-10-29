import * as React from 'react';
import { NavLink } from 'react-router-dom';
import navicons from '../UtilsUI/Icons';
import * as routes from '../Constants/Routes';

export default class Navigation extends React.Component {
	render() {
		return (
			<nav className="navigation">
				<ul className="navi-list">
					<li className="navi-heading">
						<span>Pr</span>
					</li>

					<li className="navi-item">
						<NavLink
							to={routes.SIGN_IN}
							exact={true}
							activeClassName="active"
							title="Dashboard"
						>
							{navicons.dashboard}
							<span className="pagename">Sign In</span>
						</NavLink>
					</li>

					<li className="navi-item">
						<NavLink
							to={routes.SIGN_UP}
							exact={true}
							activeClassName="active"
							title="Dashboard"
						>
							{navicons.dashboard}
							<span className="pagename">Sign Up</span>
						</NavLink>
					</li>

					<li className="navi-item">
						<NavLink
							to={routes.LANDING}
							exact={true}
							activeClassName="active"
							title="Create Character"
						>
							{navicons.createchar}
							<span className="pagename">Landing</span>
						</NavLink>
					</li>

					<li className="navi-item">
						<NavLink to={routes.HOME} exact={true} activeClassName="active" title="Soon™">
							{navicons.soon}
							<span className="pagename">Home™</span>
						</NavLink>
					</li>

					<li className="navi-item">
						<NavLink
							to={routes.ACCOUNT}
							exact={true}
							activeClassName="active"
							title="Missions"
						>
							{navicons.missions}
							<span className="pagename">Account</span>
						</NavLink>
					</li>

					<li className="navi-item">
						<NavLink
							to={routes.PASSWORD_FORGET}
							exact={true}
							activeClassName="active"
							title="Missions"
						>
							{navicons.missions}
							<span className="pagename">Forgot password</span>
						</NavLink>
					</li>
				</ul>
			</nav>
		);
	}
}
