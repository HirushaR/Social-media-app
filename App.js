import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-native-stack'
import loadingScreen from './screens/loadingscreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDJhxA55ogWh-MTOZ2ZsoOFdlASntQ9cr8",
  authDomain: "socialapp-58122.firebaseapp.com",
  databaseURL: "https://socialapp-58122.firebaseio.com",
  projectId: "socialapp-58122",
  storageBucket: "socialapp-58122.appspot.com",
  messagingSenderId: "18538358585",
  appId: "1:18538358585:web:910d3c53097ff557b5eae8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);