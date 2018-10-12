import * as React from 'react';

// *********************************************************************
// HOC - Tyypitykset
// *********************************************************************

// ENCHANCER TYPES

interface IEnchance {
	condition: boolean;
}

export const WithCondition = <P extends {}>(WrappedComponent: React.ComponentType<P>) => {
	return class extends React.Component<P & IEnchance> {
		render() {
			const { condition, ...props } = this.props as IEnchance;
			if (!condition) return null;
			return <WrappedComponent {...props} />;
		}
	};
};
