import * as React from 'react';
import './Checkbox.scss';

interface IProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
	label: string;
}

export const Checkbox: React.SFC<IProps> = ({ id, label, ...rest }) => {
	return (
		<div className="themecheckbox">
			<input type="checkbox" id={id} {...rest} />
			<label htmlFor={id}>{label}</label>
		</div>
	);
};
