import * as React from 'react';
import { SelectBase } from 'react-select';
import { Field } from 'Common/Field/Field';
import { OptionsType } from 'react-select/lib/types';

export const Select: React.SFC<IProps> = ({ id, label, responsive, ...rest }) => {
	responsive = responsive || true;

	return (
		<Field label={label} id={id}>
			<SelectBase id={id} {...rest} />
		</Field>
	);
};

export interface IProps extends OptionsType<any> {
	id: string;
	label: string;
	value?: string;
	responsive?: boolean;
	placeholder?: string;
	checked?: boolean;
	required?: boolean;
	disabled?: boolean;
	onChange?(params?: any): void;
	onBlur?(params?: any): void;
	onKeyUp?(params?: any): void;
}
