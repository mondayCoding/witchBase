import * as React from 'react';
import { SelectBase } from 'react-select';
import { Field } from 'Common/Field/Field';
import { OptionsType } from 'react-select/lib/types';

export const Select: React.SFC<IProps> = ({ id, label, ...rest }) => {
	return (
		<Field label={label} id={id}>
			<SelectBase
				classNamePrefix="react-select"
				className="react-select-container"
				id={id}
				{...rest}
			/>
		</Field>
	);
};

export interface IProps extends OptionsType<any> {
	id: string;
	label: string;
	value?: string;
	placeholder?: string;
	checked?: boolean;
	required?: boolean;
	disabled?: boolean;
	onChange?(params?: any): void;
	onBlur?(params?: any): void;
	onKeyUp?(params?: any): void;
}
