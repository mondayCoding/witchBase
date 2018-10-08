import * as React from 'react';
import { Heading } from 'Common/Index';

export interface IProps {
	name?: string;
}

export const TempPageAlt: React.SFC<IProps> = (props) => {
	return (
		<div>
			<Heading headingText="Alternate template heading" />
		</div>
	);
};
