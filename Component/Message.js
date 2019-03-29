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

type props = {}
export default class Message extends Component<props>{
  constructor(props){
    super(props);

  }
   render(){
    return (
      <View style={styles.container}>
        <Text>Message22</Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({
    container:{
      flex:1,
    }
});

