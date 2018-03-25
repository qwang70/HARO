import React, { Component } from 'react'

import {
  ListGroup, ListGroupItem, Button, PageHeader
} from 'react-bootstrap'

class AllRequests extends Component {
  //TODO: store the curr location when first access the web
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     materials: []
  //   }
  // }
  state = { btn: 'primary' }
  handleTake = () => {
    this.setState({ btn: 'success' })
  }

  render() {
    return (
      <div>
        <PageHeader>Current Available Requests</PageHeader>
        <ListGroup>
          <ListGroupItem header='A Blanket'>
            <Button onClick={this.handleTake} bsStyle={this.state.btn}>
              Deliver
            </Button>
          </ListGroupItem>
          <ListGroupItem header='School supplies'>
            <Button bsStyle='primary'>Deliver</Button>
          </ListGroupItem>
          <ListGroupItem header='Bandaid'>
            <Button bsStyle='primary'>Deliver</Button>
          </ListGroupItem>
          <ListGroupItem header='Diaper'>
            <Button bsStyle='primary'>Deliver</Button>
          </ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}

export default AllRequests