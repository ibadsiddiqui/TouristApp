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
import { Images } from '../Themes'
// navigation
import {navigate} from 'react-navigation'
 
// Styles
import styles from './Styles/LaunchScreenStyles'


export default class LaunchScreen extends Component {
  // defines constructor
  constructor(){
    super();
    this.state={
      email: "",
      password: "",
    }
  }

  // load data from asyncstorage
  onLoad = async () =>{
    // loads params from registration navigation
    const {params} = this.props.navigation.state;
    const bio = await AsyncStorage.getItem("@bio");
    const name = await AsyncStorage.getItem("@name");
    

      //check if state email and passowrd is not empty
    if(this.state.email != "" && this.state.password != ""){
      const EmailKey = "@email";          /// Assigns Email Key
      const PassKey  = "@password";    /// Assigns Pass Key
      
       // try to get the email and password from asycstorage
      try{
        const email    = await AsyncStorage.getItem(EmailKey);  // Get the email using EmailKey from asyncstorage
        const password = await AsyncStorage.getItem(PassKey);   // Get the pass  using Passkey  from asyncstorage
        if(email == this.state.email && password == this.state.password){  // Check if the user if valid or not
          ToastAndroid.show('Welcome ' + email, ToastAndroid.SHORT);
          //sends data to next desktop profile
          this.props.navigation.navigate('DesktopScreen')
        }else if(email != this.state.email || password != this.state.password)
        ToastAndroid.show('User not found!', ToastAndroid.SHORT);
      }catch(error){
          ToastAndroid.show("Error in logging in", ToastAndroid.SHORT); // Alert Password or Email error
          this.props.navigation.navigate('LaunchScreen');          // stay where u are
      }      
    }
    else
      ToastAndroid.show('Email or Passowrd not inserted',ToastAndroid.SHORT);  // Alert if input boxes are empty
  }
  render () {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="transparent" barStyle="light-content"/>
        <Text style={[styles.centered, styles.logo]}>Welcome back Doctor! ;) </Text>
        <ScrollView style={styles.container}>
          <View style={styles.section} >
            <View style={styles.loginSection}>
              <TextInput  style={styles.inputEmail}
                          keyboardType= 'email-address'
                          onChangeText={(text)=>{this.setState({email: text})}}   // assign the values to state on change Text
                          placeholder="Enter Email.."     />
              <TextInput  style={styles.inputPass}
                          onChangeText={(text)=>{this.setState({password: text})}} // assign the values to state on change Text
                          placeholder="Enter Password.." />
              <TouchableHighlight   
                          onPress = {this.onLoad}                                  // on login validate
                          underlayColor ="#efefef" style={styles.submitBtn1}>
                    <Text style={styles.submitText}>Login</Text>
              </TouchableHighlight>
            </View>
            <View>
                <TouchableHighlight onPress = {()=>{this.props.navigation.navigate('RegisterScreen')}} // navigate to RegisterScreen assigned
                                    underlayColor ="#efefef" style={styles.submitBtn2}>
                    <Text style={styles.submitText}>New? Register here.</Text>
                </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}
  

