import * as React from 'react';
import './Radiobox.scss';

export const Radiobox: React.SFC<any> = ({ id, label, ...rest }) => {
	return (
		<div className="themeradio">
			<input type="radio" id={id} {...rest} />
			<label htmlFor={id}> {label} </label>
		</div>
	);
};
