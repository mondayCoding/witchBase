import * as React from 'react';
import classNames from 'classnames';
import './Heading.scss';

export const Heading: React.SFC<IProps> = ({
	headingText,
	className,
	icon,
	tooltip,
	isInline,
	type,
	...rest
}) => {
	const classString = classNames({
		[className]: className,
		themeheading: true,
		inline: isInline
	});

	const HeadingContent = () => {
		return (
			<React.Fragment>
				{icon && <span className="icon">{icon}</span>}
				{headingText && <span>{headingText}</span>}
				{tooltip && <span>TODO: TOOLTIP</span>}
			</React.Fragment>
		);
	};

	switch (type) {
		case 'h3':
			return (
				<h3 className={classString} {...rest}>
					<HeadingContent />
				</h3>
			);
		case 'h4':
			return (
				<h4 className={classString} {...rest}>
					<HeadingContent />
				</h4>
			);
		case 'h5':
			return (
				<h5 className={classString} {...rest}>
					<HeadingContent />
				</h5>
			);
		default:
			return (
				<h2 className={classString} {...rest}>
					<HeadingContent />
				</h2>
			);
	}
};

export interface IProps {
	className?: string;
	title?: string;
	icon?: React.ReactNode;
	headingText: React.ReactNode;
	isInline?: boolean;
	tooltip?: string;
	type?: string;
	onClick?(params: any): void;
}
