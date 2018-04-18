import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import SidebarExample from './SidebarExample';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SidebarExample />, document.getElementById('root'));
registerServiceWorker();
