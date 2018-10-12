import * as React from 'react';
import { Loader } from 'Common/Utility/Loader';

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
			return condition ? <WrappedComponent {...props} /> : <Loader />;
		}
	};
};
