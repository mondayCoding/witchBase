import * as React from 'react';
import './Tabs.scss';

interface IState {
	activeTab: number;
}

interface IProps {
	defaultTabIndex?: number;
}

export class Tabs extends React.Component<IProps> {
	state: IState = {
		activeTab: this.props.defaultTabIndex || 0
	};

	setActiveTab = (activeTab: number) => {
		this.setState({
			activeTab
		});
	};

	renderTabButtons() {
		return React.Children.map(this.props.children, (child, index) => {
			// null check, since there are "optional" children
			if (!child) {
				return null;
			}
			return React.cloneElement(child as any, {
				onClick: this.setActiveTab,
				tabIndex: index,
				isActive: this.state.activeTab === index
			});
		});
	}

	renderActiveContent() {
		const { children } = this.props as any;
		const { activeTab } = this.state;

		if (children[activeTab]) {
			return children[activeTab].props.children;
		}
	}

	render() {
		return (
			<div className="tabs">
				<div className="tab-titles">{this.renderTabButtons()}</div>
				<div className="tab-content">{this.renderActiveContent()}</div>
			</div>
		);
	}
}
