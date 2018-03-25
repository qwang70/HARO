import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Route, Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import RequestMaterial from '../containers/RequestMaterial'
import RequestHistories from '../containers/RequestHistories'
import Register from '../containers/Register'
import Login from '../containers/Login'
import AllRequests from '../containers/AllRequests.js'

const App = ({ match }) => (
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">HARO</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer to='/request'>
          <NavItem eventKey='1'>Request</NavItem>
        </LinkContainer>
        <LinkContainer to='/histories'>
          <NavItem eventKey='2'>Histories</NavItem>
        </LinkContainer>
        <LinkContainer to='/all'>
          <NavItem eventKey='3'>All</NavItem>
        </LinkContainer>
        <NavItem href='../index.html' eventKey='4'>Map</NavItem>
      </Nav>
      <Nav pullRight>
        <LinkContainer to='/register'>
          <NavItem eventKey='5'>Register</NavItem>
        </LinkContainer>
        <LinkContainer to='/login'>
          <NavItem eventKey='6'>Login</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
    <div className='container'>
      <Route exact path={`${match.url}`} render={() => <h1>Hello</h1>} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
      <Route path='/request' component={RequestMaterial} />
      <Route path='/histories' component={RequestHistories} />
      <Route path='/all' component={AllRequests} />
    </div>
  </div>
)

export default App