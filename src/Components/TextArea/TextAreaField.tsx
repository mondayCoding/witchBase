import * as React from 'react';
import './TextAreaField.scss';
import { Field } from 'Common/Index';

export interface IProps {
	id: string;
	name?: string;
	label: string;
	value?: string;
	placeholder?: string;
	className?: string;
	readonly?: boolean;
	required?: boolean;
	disabled?: boolean;
	type?: string;
	validation?: string;
	tooltip?: string;
	onChange?(params?: any): void;
	onBlur?(params?: any): void;
	onKeyUp?(params?: any): void;
}

export const TextAreaResponsive: React.SFC<IProps> = ({ id, label, tooltip, ...rest }) => {
	return (
		<Field id={id} label={label} tooltip={tooltip}>
			<textarea className="themetextarea" id={id} {...rest} />
		</Field>
	);
};
