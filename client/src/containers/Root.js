import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../components/App'
import UserPage from '../components/UserPage'
import RequestMaterial from '../components/RequestMaterial'
import ListAllRequest from '../components/ListAllRequest'
import Register from '../containers/Register'
import Login from '../containers/Login'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/user' component={UserPage} />
        <Route path='/reqMat' component={RequestMaterial} />
        <Route path='/listAllReq' component={ListAllRequest} />
      </Switch>
    </Router>
  </Provider>
)

export default Root