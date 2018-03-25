import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions'
import {
  Form, FormControl, Col, FormGroup, ControlLabel, Button, PageHeader
} from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value })
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value })
  }

  render() {
    return (
      <div className='container'>
        <PageHeader>Login</PageHeader>
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
          </Col>
            <Col sm={10}>
              <FormControl
                type="email"
                onChange={this.handleEmailChange}
                placeholder="Email" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
          </Col>
            <Col sm={10}>
              <FormControl
                type="password"
                onChange={this.handlePasswordChange}
                placeholder="Password" />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  this.props.loginUser(this.state)
                }}
                type="submit">
                Register
              </Button>
            </Col>
          </FormGroup>
        </Form>

      </div>
    )
  }
}

const mapStateToProps = state => { }
const mapDispatchToProps = dispatch => ({
  registerUser: userInfo => dispatch(loginUser(userInfo))
})


const LoginPage = connect(mapStateToProps, mapDispatchToProps)(Login)
export default LoginPage