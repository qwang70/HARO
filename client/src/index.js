import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import configStore from './configStore'
import registerServiceWorker from './registerServiceWorker';

let store = configStore()
ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
