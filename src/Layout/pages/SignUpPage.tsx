import * as React from 'react';
import { Heading, TextInputField, TextInputMaterial } from 'Common/Index';
import { auth } from '../../Firebase';

class State {
	email: string = '';
	passwordOne: string = '';
	passwordTwo: string = '';
}

const byPropKey = (propertyName: any, value: string) => () => ({
	[propertyName]: value
});

export class SignUp extends React.Component<object, State> {
	state = new State();

	handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		this.setState({ [name]: value } as Pick<State, keyof State>);
	};

	handleKeyUp = (e: React.KeyboardEvent) => {
		e.keyCode === 13 && alert('Logging');
		console.log('got to key down?');
		// auth.signInWithEmailAndPassword('', '');
	};

	render() {
		const { passwordOne, passwordTwo, email } = this.state;

		return (
			<div>
				<Heading headingText="Sign Up" className="underlined" />

				<TextInputMaterial
					id={'pass'}
					name={'email'}
					label={'Password'}
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
