import * as React from 'react';
import './TextArea.scss';

export interface IProps {
	id?: string;
	name?: string;
	label?: string;
	value?: string;
	placeholder?: string;
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

export const TextArea: React.SFC<IProps> = ({ id, label, tooltip, ...rest }) => {
	return (
		<div className={'themetextarea--wrapper'}>
			<label className="themetextarea--label" htmlFor={id}>
				{label}
			</label>
			<div className="themetextarea--content">
				<textarea className="themetextarea" id={id} {...rest} />
			</div>
		</div>
	);
};
