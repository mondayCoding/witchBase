import * as React from 'react';

class State {
	readonly addPositive: string = '';
	readonly addNegative: string = '';
	readonly total: number;
}

export class BudjetCalculator extends React.Component<object, State> {
	state = new State();

	render() {
		// return <div>{this.props.children(this.state)}</div>;
		return <div>sdasdasd</div>;
	}
}
