import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

const App = ({ match }) => (
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">HARO</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <LinkContainer to='/register'>
          <NavItem eventKey='1'>Register</NavItem>
        </LinkContainer>
        <LinkContainer to='/login'>
          <NavItem eventKey='2'>Login</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
    {/* <Route path={`${match.url}`} render={() => <h1>Hello</h1>} /> */}
  </div>
)

export default App