import * as React from 'react';
import { Tooltip } from 'Common/Utility/Tooltip';
import classNames from 'classnames';
import './Field.scss';

export interface IProps {
	id?: string;
	label: string;
	disabled?: boolean;
	responsive?: boolean;
	error?: string;
	isSmall?: boolean;
	tooltip?: string;
}

export const Field: React.SFC<IProps> = ({
	id,
	label,
	tooltip,
	error,
	disabled,
	isSmall,
	children
}) => {
	const classString = classNames({
		themefield: true,
		hasError: error,
		isNumeric: isSmall,
		isDisabled: disabled
	});

	return (
		<React.Fragment>
			<div className={classString}>
				{tooltip ? (
					<Tooltip content={tooltip}>
						<label className="themefield--label" htmlFor={id}>
							<span>{label}</span>
						</label>
					</Tooltip>
				) : (
					<label className="themefield--label" htmlFor={id}>
						<span>{label}</span>
					</label>
				)}

				<div className="themefield--content">{children}</div>
			</div>

			{/* {error && <div className="themefield--error">{error}</div>} */}
		</React.Fragment>
	);
};
