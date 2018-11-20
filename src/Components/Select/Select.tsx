import * as React from 'react';
import ReactSelect from 'react-select';
import { Props as reactSelectProps } from 'react-select/lib/Select';

export const Select: React.SFC<IProps> = (props) => (
	<ReactSelect classNamePrefix="react-select" className="react-select" {...props} />
);

interface IOptionType {
	label: string;
	value: string;
}

export interface IProps extends reactSelectProps<any> {
	id?: string;
	label?: string;
	placeholder?: string;
	tooltip?: string;
	checked?: boolean;
	required?: boolean;
	disabled?: boolean;
	onChange?(params?: any): void;
	onBlur?(params?: any): void;
	onKeyUp?(params?: any): void;
}
