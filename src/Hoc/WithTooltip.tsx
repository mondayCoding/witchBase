import * as React from 'react';
import { Tooltip } from 'Common/Utility/Tooltip';

interface ITooltipProps {
	content: string;
}

export const WithTooltip = <P extends {}>(WrappedComponent: React.ComponentType<P>) => {
	class Tooltipped extends React.Component<P & ITooltipProps> {
		render() {
			const { content, ...props } = this.props as ITooltipProps;
			return (
				<Tooltip content={content}>
					<WrappedComponent {...props} />
				</Tooltip>
			);
		}
	}
	(Tooltipped as any).displayName = 'WithTooltip';
	return Tooltipped;
};
