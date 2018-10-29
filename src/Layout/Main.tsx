import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { TempPage } from './pages/TempPage';
import { TempPageAlt } from './pages/TempPageAlt';
import { BudjetCalculatorPage } from './pages/BudjetCalculator';
import { SignUp } from './pages/SignUpPage';
import { SignIn } from './pages/SignInPage';
import * as routes from '../Constants/Routes';

interface IState {
	hasError: boolean;
}

export default class Main extends React.Component {
	state: IState = {
		hasError: false
	};

	componentDidCatch(error: any, info: any) {
		// fallback UI
		this.setState({ hasError: true });
		console.error(error);
		console.error(info);
	}

	render() {
		return (
			<main className="main">
				{!this.state.hasError ? (
					<Switch>
						<Route exact={true} path={routes.SIGN_IN} component={SignIn} />
						<Route exact={true} path={routes.SIGN_UP} component={SignUp} />
						<Route exact={true} path={routes.LANDING} component={BudjetCalculatorPage} />
						<Route exact={true} path={routes.HOME} component={TempPageAlt} />
						<Route exact={true} path={routes.ACCOUNT} component={SignUp} />
						<Route exact={true} path={routes.PASSWORD_FORGET} component={TempPageAlt} />
						<Redirect to="/" />
					</Switch>
				) : (
					<section>
						<h2>Something Broke ;(</h2>
					</section>
				)}
			</main>
		);
	}
}
