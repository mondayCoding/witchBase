import * as React from 'react';
import classNames from 'classnames';
import './TextInputSimple.scss';

interface IProps {
	id?: string;
	name?: string;
	value?: string;
	placeholder?: string;
	readonly?: boolean;
	required?: boolean;
	disabled?: boolean;
	title?: any;
	isSmall?: boolean;
	type?: string;
	error?: any;
	onChange?(params?: any): any;
	onBlur?(params?: any): any;
	onKeyUp?(params?: any): any;
}

export const TextInput: React.SFC<IProps> = ({ id, value, error, disabled, readonly, ...rest }) => {
	const classString = classNames({
		['themeinput--simple']: true,
		['hasError']: error,
		['isDisabled']: disabled,
		['isReadonly']: readonly
	});

	return (
		<div className={classString}>
			<input
				className="themeinput"
				type="text"
				id={id}
				title={error}
				{...rest}
				value={value}
				readOnly={readonly}
			/>
			<span className="bar" />
		</div>
	);
};
