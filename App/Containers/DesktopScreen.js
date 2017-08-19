import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';
import styles from './Styles/DesktopScreenStyles'
export default class DesktopScreen extends Component {
  constructor(){
    super();

    //defines the latitude and longitude
    this.state = {
      mapRegion: null,
      lastLat: null,
      lastLong: null,
    }
  }

  // start the trace using GPS when component is mounted
  componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition((position) => {
      // Create the object to update this.state.mapRegion through the onRegionChange function
      let region = {
        latitude:       position.coords.latitude,
        longitude:      position.coords.longitude,
        latitudeDelta:  0.00922*1.5,
        longitudeDelta: 0.00421*1.5
      }
      // calls the onRegionChange if the person changes his/her location
      this.onRegionChange(region, region.latitude, region.longitude);
    });
  }

  //  the onRegionChange function traces if the person changes his/her location
  // and sets to new one
  onRegionChange(region, lastLat, lastLong) {
    this.setState({
      mapRegion: region,
      // If there are no new values set use the the current ones
      lastLat: lastLat || this.state.lastLat,
      lastLong: lastLong || this.state.lastLong
    });
  }
  // remove the component if unmounted
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  // on pressing the map get your current location
  // onMapPress(e) {
  //   console.log(e.nativeEvent.coordinate.longitude);
  //   let region = {
  //     latitude:       e.nativeEvent.coordinate.latitude,
  //     longitude:      e.nativeEvent.coordinate.longitude,
  //     latitudeDelta:  0.00922*1.5,
  //     longitudeDelta: 0.00421*1.5
  //   }
  //   this.onRegionChange(region, region.latitude, region.longitude);
  // }

  render() {
    return (
      <View style={{flex: 1}}>
        <MapView
          style={styles.map}
          region={this.state.mapRegion}
          showsUserLocation={true}
          followUserLocation={true}
          onRegionChange={this.onRegionChange.bind(this)}
          mapType="hybrid"
          showsPointsOfInterest={true}
          >
          <MapView.Marker
            coordinate={{
              latitude: (this.state.lastLat + 0.00050) || -36.82339,
              longitude: (this.state.lastLong + 0.00050) || -73.03569,
            }}>
            <View>
              <Text style={{color: '#000'}}>
                { this.state.lastLong } / { this.state.lastLat }
              </Text>
            </View>
          </MapView.Marker>
        </MapView>
      </View>
    );
  }
}