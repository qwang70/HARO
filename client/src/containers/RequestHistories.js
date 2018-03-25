import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMaterialsIfNecessary } from '../actions'

import {
  ListGroup, ListGroupItem, PageHeader, Button
} from 'react-bootstrap'

class RequestHistories extends Component {
  //TODO: store the curr location when first access the web
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     materials: []
  //   }
  // }
  componentDidMount() {
    let { userId, getMaterialsIfNecessary } = this.props
    getMaterialsIfNecessary(userId)
  }

  render() {
    let materials = this.props.materials
    let items = materials.map(material =>
      <ListGroupItem header={material.resource}>
        {material.status}
      </ListGroupItem>
    )
    return (
      <div>
        <PageHeader>Relief supplies Request History</PageHeader>
        <ListGroup>
          {items}
        </ListGroup>
        <Button onClick={e => this.props.getMaterialsIfNecessary(2)} >
              Refresh
        </Button>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return { materials: state.entities.materials, userId: state.userId }
}
const mapDispatchToProps = dispatch => ({
  getMaterialsIfNecessary: userId => dispatch(getMaterialsIfNecessary(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(RequestHistories)