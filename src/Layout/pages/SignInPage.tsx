import * as React from 'react';
import { Heading, TextInputResponsive } from 'Common/Index';

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
				<TextInputResponsive id={'nom'} name={'nom'} label={'Password'} value={''} />
				<TextInputResponsive id={'nom'} name={'nom'} label={'Password'} value={''} />
				<TextInputResponsive id={'nom'} name={'nom'} label={'Password'} value={''} />
			</div>
		);
	}
}
