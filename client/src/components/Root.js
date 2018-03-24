import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import Register from '../containers/Register'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={Register} />
      {/* <Route path="/register" component={App} />
      <Route path="/login" component={App} /> */}
    </Router>
  </Provider>
)

export default Root