import './App/Config/ReactotronConfig'
import { AppRegistry } from 'react-native'
import App from './App/Containers/App'
import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyBPjJjMKucWoKhl2Kjfm4UfYvIehgEHIMU",
    authDomain: "touristapp-4dc75.firebaseapp.com",
    databaseURL: "https://touristapp-4dc75.firebaseio.com",
    projectId: "touristapp-4dc75",
    storageBucket: "touristapp-4dc75.appspot.com",
    messagingSenderId: "378627312242"
  };
firebase.initializeApp(config);
AppRegistry.registerComponent('TouristApp', () => App)
