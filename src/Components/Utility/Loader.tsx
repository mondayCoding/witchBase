import * as React from 'react';
import './Loader.scss';

//*****************************************************************************************************************
// Loader component
//*****************************************************************************************************************

export const Loader: React.SFC = () => {
	return (
		<div className="themeloader--wrap">
			<div className="themeloader" />
		</div>
	);
};
