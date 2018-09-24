import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './Layout/Site';

// Import internal styles
import './Styles/style.css';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
