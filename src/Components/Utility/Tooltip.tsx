import * as React from 'react';
import Tip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap_white.css';

//*****************************************************************************************************************
// Infotip component
//*****************************************************************************************************************

interface IProps {
	content: React.ReactNode;
}

export const Tooltip: React.SFC<IProps> = ({ content, children }) => {
	return (
		<Tip
			placement="right"
			mouseEnterDelay={0.1}
			trigger={['hover']}
			overlay={<span>{content}</span>}
			transitionName="rc-tooltip-animate"
		>
			{children}
		</Tip>
	);
};
