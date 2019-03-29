/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity 
} from 'react-native';

import Main from "./Component/Main";


export default class App extends Component{
   
  render() {
         return (
              <Main/>
        );
  }
}