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
          <NavItem eventKey='3'>All Requests</NavItem>
        </LinkContainer>
        <NavItem href='/Users/wangqiwen/Documents/github/HARO/index.html' eventKey='4'>Map</NavItem>
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
      <Route exact path={`${match.url}`} render={() => (
      <div>
      <h1>HARO Project: Help people find A Resource Out</h1>
      <h3>Senario: </h3>
      <h4>Recently, a magnitude-4.1 earthquake has struck in New York City about seven miles.</h4> 
      <h4>Tons of buildings, especially wooden buildings have been destroyed. </h4>
      <h4>Many people become homeless because of that. The relief rescue supplies haven't reached out to them. </h4>
      <h4>A lot of them are very close to you! Are you willing to provide them some resources?")</h4>
      </div>
      )
      
      }/>
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
      <Route path='/request' component={RequestMaterial} />
      <Route path='/histories' component={RequestHistories} />
      <Route path='/all' component={AllRequests} />
    </div>
  </div>
)

export default App