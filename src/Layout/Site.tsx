import classNames from 'classnames';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';
import Main from './Main';
import Navigation from './Navigation';

export default class Site extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div className={'body--layout'}>
					<div className="content-layout">
						<Navigation />
						<Main />
					</div>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

{
	/* use this to debug */
}
{
	/* <React.StrictMode>
   <Navigation/>
   <Main/>
</React.StrictMode> */
}
