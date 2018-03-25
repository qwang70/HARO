import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import configStore from './configStore'
import registerServiceWorker from './registerServiceWorker';

let store = configStore()
ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
