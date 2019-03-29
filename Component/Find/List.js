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
import  ScreenUtil from '../utils/ScreenUtil';

type props = {}
export default class List extends Component<props>{
  constructor(props){
      super(props);
      this.state={
        textWidth:this.props.textWidth
      }

      console.log("constructor---");
  }
  
  getInitialState(){
    console.log("getInitialState---");
  }

  componentWillUpdate(){
    console.log("componentWillUpdate1111---组件将要更新");
  }

  componentDidUpdate(){
    console.log("componentDidUpdate1111---组件更新完毕");
  }

  componentDidMount() {
    console.log("componentDidMount1111");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount1111");
  }

 
  render(){
    console.log("render。。。");
      let textWidth=this.state.textWidth;
        return (
              <View>
                    {/* <View  style={styles.swiperContainer}>
                          <Swiper height={180}  autoplay={true} autoplayTimeout={2.5}  showsButtons={false} showsPagination={false}>
                            <View style={styles.slide}>
                              <Image source={{uri: 'http://p0.meituan.net/deal/416d01cbc4b8a2871b3c260615b5998088199.jpg'}} style={{width:this.state.width,height: 180}} ></Image>
                            </View>
                            <View style={styles.slide}>
                              <Image source={{uri: 'http://p0.meituan.net/deal/416d01cbc4b8a2871b3c260615b5998088199.jpg'}} style={{width:this.state.width,height: 180}} ></Image>
                            </View>
                            <View style={styles.slide}>
                              <Image source={{uri: 'http://p0.meituan.net/deal/416d01cbc4b8a2871b3c260615b5998088199.jpg'}} style={{width:this.state.width,height: 180}} ></Image>
                            </View>
                          </Swiper>
                    </View> */}

                    {/* <View style={styles.middleMenu}>
                          <View style={styles.menuContent}>
                                <Image source={require('../../images/find/hot.png')} style={{width:40,height: 40}} ></Image>
                                <Text style={styles.menuText}>本周最热</Text>
                          </View>
                          <View style={styles.menuContent}>
                                <Image  source={require('../../images/find/colltion.png')}  style={{width:40,height:40}} ></Image>
                                <Text   style={styles.menuText}>收藏集</Text>
                          </View>
                          <View  style={styles.menuContent}>
                                <Image  source={require('../../images/find/hd.png')}  style={{width:40,height: 40}} ></Image>
                                <Text  style={styles.menuText}>活动</Text>
                          </View>
                    </View> */}
{/* 
                    <View>
                        <View  style={styles.listTitle}>
                              <View style={[styles.contentSty]}>
                                  <Image source={require('../../images/find/hot.png')} style={{width:15,height: 15}} ></Image>
                                  <Text   style={{marginLeft:5}}>热门文章</Text>
                              </View>
                              <View  style={[styles.contentSty]}>
                                  <Image source={require('../../images/find/set.png')} style={{width:15,height: 15}} ></Image>
                                  <Text   style={{marginLeft:5}}>定制热门</Text>
                              </View>
                        </View>
                    </View> */}


                    <View>
                            <View style={{backgroundColor:"white",flexDirection:"row",justifyContent:"space-between",paddingLeft:15,paddingRight:15,paddingTop:15,paddingBottom:15,
      borderBottomWidth:1,
      borderColor:"#e5e5e5"}}>
                                  <View>
                                        <Text 
                                        style={{width:350,fontSize:16,fontWeight:"bold"}} 
                                        ellipsizeMode={'tail'}  
                                        numberOfLines={2} >
                                        【纯干货】纯干货纯干货纯干货纯干货纯干货纯干货纯干货纯干货纯干货纯干货纯干货纯干货纯干货纯干货纯干货纯干货纯干货纯干</Text>
                                        <Text>94人赞 ~ 海贼王架构笔记 ~ 8小时前 </Text>
                                    </View>
                                    <View>
                                        <Image source={require('../../images/find/hzw.jpg')}  style={{width:60,height: 60}} ></Image>
                                    </View>
                            </View>

                            
                    </View>

  



              </View>
        );
  }
}


const styles = StyleSheet.create({
    swiperContainer: {
      backgroundColor: "#f3f3f3" ,
      height:150,
      position:"relative"
    },
    middleMenu:{
       flexDirection:"row",
       alignItems:"center",
       paddingTop:15,
       paddingBottom:15,
       textAlign:"center",
       justifyContent:"space-around",
       backgroundColor:"white",
       marginTop:15,
       marginBottom:15
    },
    menuText:{
      marginTop:10,  textAlign:"center"
    },
    menuContent:{
        justifyContent:"center"
    },
    contentSty:{
      flexDirection:"row",
      alignItems:"center"
    },
    listTitle:{
      backgroundColor:"white",
      flexDirection:"row",
      justifyContent:"space-between",
      paddingLeft:15,
      paddingRight:15,
      paddingTop:10,
      paddingBottom:10,
      borderBottomWidth:1,
      borderColor:"#e5e5e5"
    }
})
