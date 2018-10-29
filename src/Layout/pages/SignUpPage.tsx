import * as React from 'react';
import { Heading, TextInputField, TextInputMaterial } from 'Common/Index';
import { auth } from '../../Firebase';

class State {
	readonly email: string = '';
	readonly passwordOne: string = '';
	readonly passwordTwo: string = '';
	readonly total: number;
}

export class SignUp extends React.Component<object, State> {
	state = new State();

	handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newState = { [e.target.name]: e.target.value };
		this.setState((prevState) => ({
			...this.state,
			...newState
		}));
	};

	handleKeyUp = (e: React.KeyboardEvent) => {
		e.keyCode === 13 && alert('Logging');
		console.log('got to key down?');
		// auth.signInWithEmailAndPassword('', '');
	};

	render() {
		const { passwordOne, passwordTwo, email } = this.state;

		return (
			<div className="content--md">
				<Heading headingText="Sign Up" className="underlined" />

				<TextInputMaterial
					id={'pass'}
					name={'email'}
					label={'Email'}
					value={email}
					onChange={this.handleOnChange}
				/>
				<TextInputMaterial
					id={'nom'}
					name={'passwordOne'}
					label={'Password'}
					value={passwordOne}
					onChange={this.handleOnChange}
					onKeyUp={this.handleKeyUp}
				/>
				<TextInputMaterial
					id={'nom'}
					name={'passwordTwo'}
					label={'Password'}
					value={passwordTwo}
					onChange={this.handleOnChange}
					onKeyUp={this.handleKeyUp}
				/>
			</div>
		);
	}
}
