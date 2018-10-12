import * as React from 'react';
import Tip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap_white.css';

//*****************************************************************************************************************
// Infotip component
//*****************************************************************************************************************

interface IProps {
	message: string;
}

export const Tooltip: React.SFC<IProps> = (props) => {
	return (
		<Tip placement="top" trigger={['hover']} overlay={<span>{props.message}</span>}>
			{props.children}
		</Tip>
	);
};
