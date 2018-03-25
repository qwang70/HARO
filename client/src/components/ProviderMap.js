import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
// import { requestMaterial } from '../actions'
import {Map, InfoWindow, Marker, GoogleApiWrapper, GMap} from 'google-maps-react';

import {
  Form, FormControl, FormGroup, ControlLabel, Button, PageHeader, ButtonToolbar
} from 'react-bootstrap';

export class ProviderMap extends Component {
  //TODO: store the curr location when first access the web
  constructor(props) {
    super(props)
    this.state = {
      /// defaulted at vancouver
      myLatLng: {lat: 40.6935566, lng: -73.9650863}
  };
    // this.handleResourceChange = this.handleResourceChange.bind(this)
    // this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
  }
  compondentDidMount(){
    this.getLocation();
  }

  getLocation() {
    console.log("get location")
    if (navigator.geolocation) {

      console.log("in if");
        navigator.geolocation.getCurrentPosition((position) => {
            console.log("get location success");
            this.setState({
                    myLatLng: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    }
                }
            );
            console.log(this.state.myLatLng);
            return this.state.myLatLng;
        })
    } else {
        //browser doesn't support geolocation, set as vancouver
        console.log("get location falied");
        this.setState({
                myLatLng: {lat: 40.6935566, lng: -73.9650863}
            }
        );

        return this.state.myLatLng;
    }
}

  render() {
      return (
        <Map google={this.props.google} center={{lat: 40.6935566, lng: -73.9650863}} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

      </Map>
      );
    }
  
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBCe4FY21-DdAigNV938UajjrPLlRP0t_4')
})(ProviderMap)

// const mapStateToProps = state => {return {}}
// const mapDispatchToProps = dispatch => ({
//   listAllMaterial: userInfo => dispatch(listAllMaterial(userInfo))
// })

// const ListAllRequestPage = connect(mapStateToProps, mapDispatchToProps)(ListAllRequest)
// export default ListAllRequestPage