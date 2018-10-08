import * as React from 'react';
import { Field } from 'Common/Field';
import classNames from 'classnames';

export const TextInputResponsive: React.SFC<IProps> = ({
	id,
	label,
	error,
	isSmall,
	tooltip,
	disabled,
	...rest
}) => {
	const classString = classNames({
		themeinput: true,
		hasError: error,
		isNumeric: isSmall,
		isDisabled: disabled
	});

	return (
		<Field
			label={label}
			id={id}
			data-tooltip-error={error}
			error={error}
			tooltip={tooltip}
			isSmall={isSmall}
			disabled={disabled}
		>
			<input className={classString} id={id} disabled={disabled} type="text" {...rest} />
		</Field>
	);
};

export interface IProps {
	id: string;
	name: string;
	label: string;
	value: string;
	placeholder?: string;
	readonly?: boolean;
	required?: boolean;
	disabled?: boolean;
	isSmall?: boolean;
	type?: string;
	tooltip?: string;
	error?: string;
	onChange?(params?: any): any;
	onBlur?(params?: any): any;
	onKeyUp?(params?: any): any;
}
