import * as React from 'react';
import classNames from 'classnames';
// import './Iconlink.scss';

export interface IProps {
	className?: any;
	id?: string;
	disabled?: boolean;
	href?: string;
	title?: string;
	download?: string;
	target?: string;
	size?: any;
	icon: React.ReactNode;
	onClick?(params: any): void;
	onMouseEnter?(params: any): void;
}

export const IconLink: React.SFC<IProps> = ({ icon, size, className, ...rest }) => {
	const sizeClass = size ? size : 'default';
	const classString = classNames({
		themeiconlink: true,
		[sizeClass]: true,
		[className]: className
	});

	return (
		<a tabIndex={0} className={classString} {...rest}>
			{icon}
		</a>
	);
};
