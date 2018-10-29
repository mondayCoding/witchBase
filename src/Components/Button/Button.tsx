import * as React from 'react';
import classNames from 'classnames';
import './Button.scss';

export interface IProps {
	className?: string;
	id?: string;
	disabled?: boolean;
	autoFocus?: boolean;
	buttonText?: string;
	buttonIcon?: React.ReactNode;
	type?: string;
	style?: any;
	onClick?(params: any): any;
}

export const Button: React.SFC<IProps> = ({
	className,
	buttonText,
	buttonIcon,
	type,
	disabled,
	style,
	...rest
}) => {
	buttonText = buttonText || 'button';
	type = type || 'button';

	const classString = classNames({
		themebutton: true,
		[className]: className,
		disabled
	});

	return (
		<button type={type} style={style} className={classString} {...rest}>
			{buttonIcon && <span>{buttonIcon}</span>}
			{buttonText && <span>{buttonText}</span>}
		</button>
	);
};
