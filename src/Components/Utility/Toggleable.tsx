import * as React from 'react';
import { Component, MouseEvent } from 'react';

const initialState = { show: false };

type State = Readonly<typeof initialState>;
type Props = Partial<{ children: RenderCallback; render: RenderCallback }>;
type RenderCallback = (args: ToggleableComponentProps) => JSX.Element;
type ToggleableComponentProps = { show: State['show']; toggle: Toggleable['toggle'] };

export class Toggleable extends Component<Props, State> {
	readonly state = initialState;

	toggle = () => {
		this.setState(updateToggleState);
	};

	render() {
		const { children } = this.props;
		const renderProps = { show: this.state.show, toggle: this.toggle };
		return children(renderProps);
	}
}

const updateToggleState = (prevState: State) => ({ show: !prevState.show });
