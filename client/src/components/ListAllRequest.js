import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
// import { requestMaterial } from '../actions'

import {
  Form, FormControl, FormGroup, ControlLabel, Button, PageHeader, ButtonToolbar
} from 'react-bootstrap'

export default class ListAllRequest extends Component {
  //TODO: store the curr location when first access the web
  constructor(props) {
    super(props)
    this.state = {
      d: 1
    }
    // this.handleResourceChange = this.handleResourceChange.bind(this)
    // this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
  }
  componentDidMount(){
    this.setState({d: this.state.d + 1});
  }

  render() {
    return (
      <div className='container'>
      {this.state.d}
      </div>
    )
  }
}


// const mapStateToProps = state => {return {}}
// const mapDispatchToProps = dispatch => ({
//   listAllMaterial: userInfo => dispatch(listAllMaterial(userInfo))
// })

// const ListAllRequestPage = connect(mapStateToProps, mapDispatchToProps)(ListAllRequest)
// export default ListAllRequestPage