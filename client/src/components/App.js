import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Route, Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import RequestMaterial from '../containers/RequestMaterial'
import RequestHistories from '../containers/RequestHistories'
import Register from '../containers/Register'
import Login from '../containers/Login'

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
      </Nav>
      <Nav pullRight>
        <LinkContainer to='/register'>
          <NavItem eventKey='3'>Register</NavItem>
        </LinkContainer>
        <LinkContainer to='/login'>
          <NavItem eventKey='4'>Login</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
    <div className='container'>
      <Route exact path={`${match.url}`} render={() => <h1>Hello</h1>} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
      <Route path='/request' component={RequestMaterial} />
      <Route path='/histories' component={RequestHistories} />
    </div>
  </div>
)

export default App