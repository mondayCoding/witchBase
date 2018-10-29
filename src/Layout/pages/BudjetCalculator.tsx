import * as React from 'react';
import { Heading } from 'Common/Index';
import { BudjetCalculator } from 'Containers/EconomyCalc';

export interface IProps {
	name?: string;
}

export const BudjetCalculatorPage: React.SFC<IProps> = (props) => {
	return (
		<div className="content--xxl">
			<Heading headingText="Sample heading" />
			<BudjetCalculator />
		</div>
	);
};
