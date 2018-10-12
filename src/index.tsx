import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './Layout/Site';

// Import internal styles
import './Styles/universal.scss';
import './Styles/animation.scss';
import './Styles/utilities.scss';
import './Styles/style.scss';

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
