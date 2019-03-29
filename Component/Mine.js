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
} from 'react-native';

import Index from './Mine/Index';
type props = {}
export default class Mine extends Component<props>{
  constructor(props){
    super(props);

  }
   render(){
    return (
          <Index />
    );
  }
}

const styles=StyleSheet.create({
    container:{
  
    }
});

