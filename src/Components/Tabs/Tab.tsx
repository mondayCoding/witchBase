import * as React from 'react';
import classNames from 'classnames';

interface ITabButton {
	title: string;
	tabIndex?: number;
	isActive?: boolean;
	onClick?(number: number): void;
}

export const Tab: React.StatelessComponent<ITabButton> = ({
	onClick,
	tabIndex,
	isActive,
	title
}) => {
	const classString = classNames({
		'tab-title': true,
		active: isActive
	});
	const handleTabClick = () => onClick(tabIndex);

	return (
		<button className={classString} onClick={handleTabClick} title={title}>
			{title}
		</button>
	);
};
