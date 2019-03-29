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
import Index from './Find/Index';

type props = {}
export default class Find extends Component<props>{
  constructor(props){
    super(props);

  }
   render(){
    return (
        <Index></Index>
    );
  }
}

const styles=StyleSheet.create({
    container:{
      flex:1,
    }
});

