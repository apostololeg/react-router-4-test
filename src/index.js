import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import store from './store';
import routes from './routes';

ReactDOM.render(<Provider store={store}>
    <App routes={routes}/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
