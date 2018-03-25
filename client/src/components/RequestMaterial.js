import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { requestMaterial } from '../actions'

import {
  Form, FormControl, FormGroup, ControlLabel, Button, PageHeader, ButtonToolbar
} from 'react-bootstrap'

class RequestMaterial extends Component {
  //TODO: store the curr location when first access the web
  constructor(props) {
    super(props)
    this.state = {
      //TODO: get userID
      // userId: userId from reducer
      resource: '',
      description: '',
      // TODO: change lat, lng based on the stored lat, lng
      location: {
          lat: 40,
          lng: 50}
    }
    this.handleResourceChange = this.handleResourceChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
  }

  handleResourceChange(e) {
    this.setState({ resource: e.target.value })
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value })
  }

  render() {
    return (
      <div className='container'>
        <PageHeader>Relief supplies Request</PageHeader>
        <Form horizontal>
          <FormGroup controlId="formHorizontalResource">
            
              <ControlLabel>Relief supplies needed</ControlLabel>
              <FormControl
                type="resource"
                onChange={this.handleResourceChange}
                placeholder="Resource" />
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">

              <ControlLabel>Reason for requesting the relief supplies</ControlLabel>
              <FormControl
                type="description"
                onChange={this.handleDescriptionChange}
                placeholder="Description" />
          </FormGroup>
          <FormGroup>
            <ButtonToolbar>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  this.props.requestMaterial(this.state);
                }}
                type="submit">
                Send Request to Nearby People
              </Button>
              </ButtonToolbar>
          </FormGroup>
        </Form>

      </div>
    )
  }
}


const mapStateToProps = state => {return {}}
const mapDispatchToProps = dispatch => ({
  requestMaterial: userInfo => dispatch(requestMaterial(userInfo))
})

const RequestMaterialPage = connect(mapStateToProps, mapDispatchToProps)(RequestMaterial)
export default RequestMaterialPage