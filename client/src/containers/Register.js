import React, { Component } from 'react'
import { connect } from 'react-redux'
import { registerUser } from '../actions'
import {
  Form, FormControl, Col, FormGroup, ControlLabel, Button, PageHeader
} from 'react-bootstrap'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      username: '',
      password: ''
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value })
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value })
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value })
  }

  render() {
    return (
      <div className='container'>
        <PageHeader>Register</PageHeader>
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
          <FormGroup controlId="formHorizontalUserName">
            <Col componentClass={ControlLabel} sm={2}>
              Username
          </Col>
            <Col sm={10}>
              <FormControl
                type="text"
                onChange={this.handleUsernameChange}
                placeholder="Username" />
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
                onClick={() => this.props.registerUser(this.state)}
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

const mapDispatchToProps = dispatch => ({
  registerUser: userInfo => dispatch(registerUser(userInfo))
})

export default connect(mapDispatchToProps)(Register)