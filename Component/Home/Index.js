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
  PixelRatio,
  Image,
  Dimensions,
  ScrollView 
} from 'react-native';
import Swiper from 'react-native-swiper';
import List from './List';
import * as ScreenUtil from '../utils/ScreenUtil';

let {win_width,win_height} = Dimensions.get('window');
type props = {}
export default class Index extends Component<props>{
  constructor(props){
    super(props);
    this.state={
      width:win_width
    }
  }
 
  render(){
    return (
       <ScrollView contentContainerStyle={styles.contentContainer}>
          <View>
                <View  style={styles.container}>
                      <Swiper style={styles.wrapper} height={180}  autoplay={true} autoplayTimeout={2.5}  showsButtons={false} showsPagination={false}>
                        <View style={styles.slide}>
                          <Image source={{uri: 'http://p0.meituan.net/deal/416d01cbc4b8a2871b3c260615b5998088199.jpg'}} style={{width:this.state.width,height: 180,borderRadius: 5}} ></Image>
                        </View>
                        <View style={styles.slide}>
                          <Image source={{uri: 'http://p0.meituan.net/deal/416d01cbc4b8a2871b3c260615b5998088199.jpg'}} style={{width:this.state.width,height: 180,borderRadius: 5}} ></Image>
                        </View>
                        <View style={styles.slide}>
                          <Image source={{uri: 'http://p0.meituan.net/deal/416d01cbc4b8a2871b3c260615b5998088199.jpg'}} style={{width:this.state.width,height: 180,borderRadius: 5}} ></Image>
                        </View>
                      </Swiper>
              </View>

                <View>
                    <List textWidth={ScreenUtil.scaleSize(280)}/>
                </View>
          </View>
        </ScrollView>
  
    );
  }
}

const styles = StyleSheet.create({
    contentContainer:{

    },
    container: {
        backgroundColor: "#f3f3f3" ,
        height:180,
        position:"relative"
    },
    wrapper: {
    },
    slide: {
      height:180,
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    }
})
