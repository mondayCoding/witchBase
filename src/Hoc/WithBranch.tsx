import * as React from 'react';

// *********************************************************************
// HOC - Tyypitykset
// *********************************************************************

// ENCHANCER TYPES

interface IEnchance {
	condition: boolean;
	Branch: React.ComponentType;
}

export const WithBranch = <P extends {}>(WrappedComponent: React.ComponentType<P>) => {
	return class extends React.Component<P & IEnchance> {
		render() {
			const { Branch, condition, ...props } = this.props as IEnchance;

			return condition ? <Branch /> : <WrappedComponent {...props} />;
		}
	};
};
