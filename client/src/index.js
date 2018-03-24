import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import { createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker';

function tempReducer(state = {}, action) {
  return state
}

let store = createStore(tempReducer)
ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
