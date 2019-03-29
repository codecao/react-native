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
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper';
import Data from './Data';


type props = {}
export default class List extends Component<props>{
  constructor(props){
    super(props);
    this.state={
      textWidth:this.props.textWidth
    }
  }

  _onPress(){
       console.log("点击了.........");
  }
  render(){

       let textWidth=this.props.textWidth;


        let views=Data.map(function(item,key){
          item.imageUrl = item.squareimgurl.replace('w.h', '160.0')
              return (
                  <TouchableOpacity key={key} style={styles.container}  onPress={this._onPress}>
                        <Image  source={{uri:item.imageUrl}} style={styles.img}></Image>
                        <View  style={styles.goodInfo}>
                            <Text style={styles.goodTitle}>{item.mname}</Text>
                            <Text style={{width:textWidth}} ellipsizeMode={'tail'}  numberOfLines={1}>{item.title}</Text>
                            <Text >10元</Text>
                        </View>
                  </TouchableOpacity>
              );
        })

        return (
          <View>
             {views}
          </View>
                        
        );
  }
}


const styles = StyleSheet.create({
    container: {
      flexDirection:"row",
      padding:15,
      borderBottomWidth:0.5,
      borderColor:'silver'
  },
    img:{
      width: 80,
      height: 80,
      borderRadius: 5,
      marginRight:10
    },
    goodInfo: {
      justifyContent:"space-around",
      
    },
    goodTitle:{
      fontSize:18
    },

})
