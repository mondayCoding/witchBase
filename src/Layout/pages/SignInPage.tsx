import * as React from 'react';
import { Heading, TextInputField } from 'Common/Index';

export interface IProps {
	name?: string;
}

interface IState {
	email: string;
	password: string;
}

export class SignIn extends React.Component<IProps> {
	state: IState = {
		password: '',
		email: ''
	};

	render() {
		return (
			<div>
				<Heading headingText="Sign In" />
				<TextInputField id={'nom'} name={'nom'} label={'Password'} value={''} />
				<TextInputField id={'nom'} name={'nom'} label={'Password'} value={''} />
				<TextInputField id={'nom'} name={'nom'} label={'Password'} value={''} />
			</div>
		);
	}
}
