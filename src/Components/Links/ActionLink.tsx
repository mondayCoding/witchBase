import * as React from 'react';
import classNames from 'classnames';
import './Actionlink.scss';

export interface IProps {
	className?: any;
	id?: string;
	disabled?: boolean;
	href?: string;
	linkText: React.ReactNode;
	alt?: string;
	title?: string;
	download?: string;
	target?: string;
	icon?: React.ReactNode;
	iconAfter?: React.ReactNode;
	onClick?(x: any): void;
	onMouseEnter?(params: any): void;
}

export const ActionLink: React.SFC<IProps> = ({
	icon,
	iconAfter,
	linkText,
	className = 'tag--interactive',
	onClick,
	...rest
}) => {
	const classString = classNames({
		themelink: true,
		[className]: className
	});

	const clickEvent = (e: React.MouseEvent) => {
		e.preventDefault();
		onClick && onClick(e);
	};

	return (
		<a tabIndex={0} onClick={clickEvent} className={classString} data-role="none" {...rest}>
			{icon && <span>{icon}</span>}
			{linkText && <span>{linkText}</span>}
			{iconAfter && <span>{iconAfter}</span>}
		</a>
	);
};
