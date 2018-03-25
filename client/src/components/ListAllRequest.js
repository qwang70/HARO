import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { requestMaterial } from '../actions'

import {
  Form, FormControl, FormGroup, ControlLabel, Button, PageHeader, ButtonToolbar
} from 'react-bootstrap'

class ListAllRequest extends Component {
  //TODO: store the curr location when first access the web
  constructor(props) {
    super(props)
    this.state = {
    }
    // this.handleResourceChange = this.handleResourceChange.bind(this)
    // this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
  }

  render() {
    return (
      <div className='container'>
      </div>
    )
  }
}


const mapStateToProps = state => {return {}}
const mapDispatchToProps = dispatch => ({
  listAllMaterial: userInfo => dispatch(listAllMaterial(userInfo))
})

const ListAllRequestPage = connect(mapStateToProps, mapDispatchToProps)(ListAllRequest)
export default ListAllRequestPage