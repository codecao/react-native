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
  ScrollView ,
  TouchableOpacity
} from 'react-native';
import * as ScreenUtil from '../utils/ScreenUtil';
import {BoxShadow} from 'react-native-shadow';

let window=Dimensions.get("window");
type props = {}
export default class Index extends Component<props>{
  constructor(props){
    super(props);
    this.state={
    }
    console.log("constructor");
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
    return (
       <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={{backgroundColor:"#e5e5e5",height:window.height}}>
                  <View style={styles.userImgView} >
                         <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
                              <Image 
                                source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552627103442&di=923e5475b2ba8f375839a27ac8a631d3&imgtype=0&src=http%3A%2F%2Fimg2.100bt.com%2Fupload%2Fttq%2F20140227%2F1393507721339_middle.jpg'}}
                                  style={styles.userImg} ></Image>
                              <Text  style={styles.nickname} style={{ textAlign: 'center', color:"#323232",}}  >海贼王</Text>
                         </View>
                         <View  style={{flex:1,flexDirection:"row",alignItems:"center",flexDirection:"row",justifyContent: 'flex-end'}}>
                                <View><Text style={styles.nickname} style={{ textAlign: 'center',}} >海贼王</Text></View>
                                <Image  source={require('../../images/mine/right.png')}
                                  style={{width:20,height:20}} ></Image>
                         </View>
                  </View>

                  <View style={styles.menuTop}>
                      
                      <TouchableOpacity activeOpacity={0.6}>
                        <View style={[styles.menu,styles.menuSty]}>
                                <Image  style={styles.menuImg} source={require('../../images/mine/message.png')} ></Image>
                                <Text>消息中心</Text>
                        </View>
                       </TouchableOpacity>
                       <View style={[styles.menu,styles.menuSty]} >
                              <View  style={styles.menuSubTitle} >
                                  <Image  style={styles.menuImg} source={require('../../images/mine/zan.png')}></Image>
                                  <Text>我赞过的</Text>
                              </View>
                              <View>
                                 <Text style={{justifyContent:"flex-end"}}> 0篇 </Text>
                              </View>
                       </View>
                       <View style={[styles.menu,styles.menuSty]} >
                              <View  style={styles.menuSubTitle} >
                                  <Image  style={styles.menuImg} source={require('../../images/mine/shoucan.png')}></Image>
                                  <Text>收藏集</Text>
                              </View>
                              <View>
                                 <Text style={{justifyContent:"flex-end"}}> 0个 </Text>
                              </View>
                       </View>
                       <View style={[styles.menu,styles.menuSty]} >
                              <View  style={styles.menuSubTitle} >
                                  <Image  style={styles.menuImg} source={require('../../images/mine/qb.png')}></Image>
                                  <Text>我的钱包</Text>
                              </View>
                              <View>
                                 <Text style={{justifyContent:"flex-end"}}> 0 </Text>
                              </View>
                       </View>
                       <View style={[styles.menu,styles.menuSty]} >
                              <View  style={styles.menuSubTitle} >
                                  <Image  style={styles.menuImg} source={require('../../images/mine/eyes.png')}></Image>
                                  <Text>阅读过的文章</Text>
                              </View>
                              <View>
                                 <Text style={{justifyContent:"flex-end"}}> 5篇 </Text>
                              </View>
                       </View>
                       <View style={[styles.menu,styles.menuSty]} >
                              <View  style={styles.menuSubTitle} >
                                  <Image  style={styles.menuImg} source={require('../../images/mine/bq.png')}></Image>
                                  <Text>标签管理</Text>
                              </View>
                              <View>
                                 <Text style={{justifyContent:"flex-end"}}> 10个 </Text>
                              </View>
                       </View>
                  </View>
                  


                  <View style={styles.menuTop}>
                       <View style={[styles.menu,styles.menuSty]}>
                              <Image  style={styles.menuImg} source={require('../../images/mine/yj.png')} ></Image>
                              <Text>意见反馈</Text>
                       </View>
                       <View style={[styles.menu,styles.menuSty]}>
                              <Image  style={styles.menuImg} source={require('../../images/mine/setting.png')} ></Image>
                              <Text>设置</Text>
                       </View>
                      
                  </View>
                  
          </View>
        </ScrollView>
  
    );
  }
}

const styles = StyleSheet.create({
    contentContainer:{

    },
    userImgView:{
       backgroundColor:"white",
       alignItems:"center",
       padding:20,
       paddingTop:20,
       flexDirection:"row",
       marginTop:20
    },
    userImg:{
      width: 60, 
      height: 60,
      marginRight:10,
      borderRadius:ScreenUtil.scaleHeight(50),
   },
   nickname:{
     fontSize:20,
     color:"#323232",
     marginTop:10
   },
   menu:{
    flexDirection:"row",alignItems:"center",
    borderBottomWidth:1,
    borderBottomColor:"#e5e5e5"
   },
   menuSty:{
     paddingLeft:25,
     paddingRight:30,
     paddingTop:15,
     paddingBottom:15
   },
   menuImg:{
     width: 20, height: 20,
     marginRight: 10
   },
   menuTop:{
    backgroundColor:"white",marginTop:20
   },
   menuSubTitle:{
    flex:1, flexDirection:"row",alignItems:"center"
   }
    
})
