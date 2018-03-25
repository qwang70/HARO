import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import Register from '../containers/Register'
import Login from '../containers/Login'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path='/' component={App} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
      </div>
    </Router>
  </Provider>
)

export default Root