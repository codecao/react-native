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
import HomeIndex from './Home/Index.js';

type props = {}
export default class Home extends Component<props>{
  constructor(props){
    super(props);
    console.log("name....",this.props.name);
  }
   render(){
    return (
       <HomeIndex />
    );
  }
}


const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'red'
    },
    text:{
      fontSize:30,
      color:'black'
    }
});