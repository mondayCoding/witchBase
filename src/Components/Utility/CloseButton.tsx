import * as React from 'react';
import './CloseButton.scss';

//*****************************************************************************************************************
// Close button component
//*****************************************************************************************************************

export const CloseButton: React.SFC<{ onClick: any }> = (props) => (
	<div className="close--button" {...props} />
);
