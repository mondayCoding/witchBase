import * as React from 'react';
import './CheckboxSlider.scss';

interface IProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
	label: string;
}

export const SliderCheckbox: React.SFC<IProps> = ({ id, label, ...rest }) => {
	return (
		<div className="themeslider">
			<input type="checkbox" id={id} {...rest} />
			<label htmlFor={id}>{label}</label>
		</div>
	);
};
