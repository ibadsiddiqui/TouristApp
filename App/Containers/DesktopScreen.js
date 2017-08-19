import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';

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

}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});
