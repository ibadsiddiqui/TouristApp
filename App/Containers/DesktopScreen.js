import React, { Component } from 'react'
import { 
  ScrollView, 
  Text,
  ToastAndroid,
  Image, 
  View,
  StatusBar,
  TextInput,
  TouchableHighlight,
  AsyncStorage,
} from 'react-native'

import MapView from 'react-native-maps'
// Styles
import styles from './Styles/DesktopScreenStyles'


export default class LaunchScreen extends Component {
  // defines constructor
  constructor(){
    super();
    this.state={
      email: "",
      password: "",
    }
  }
  render () {
    return (
      <View style={styles.container}>
      <StatusBar
        translucent={true}
        // hidden={true}
        barStyle="light-content"
      />
      <MapView
            style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      </View>
    )
  }
}
  

