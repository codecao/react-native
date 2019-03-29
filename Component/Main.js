/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home  from './Home';
import Message  from './Message';
import Find  from './Find';
import Mine  from './Mine';

const dataSource = [
                    {icon:require('../images/home.png'),selectedIcon:require('../images/home_press.png'),tabPage:'Home',tabName:'首页',component:Home},
                    {icon:require('../images/find.png'),selectedIcon:require('../images/find_press.png'),tabPage:'Find',tabName:'发现',component:Find},
                    {icon:require('../images/message.png'),selectedIcon:require('../images/message_press.png'),tabPage:'Message',tabName:'消息',component:Message},
                    {icon:require('../images/mine.png'),selectedIcon:require('../images/mine_press.png'),tabPage:'Mine',tabName:'我的',component:Mine},
                 ]
var navigation = null;
type Props = {};
export default class Main extends Component {
  constructor(props) {
    super(props);
    navigation = this.props.navigation;
    this.state = {
      selectedTab:'Find'
    }
  }

  render() {
        let tabViews = dataSource.map((item,i) => {
              return (
                  <TabNavigator.Item
                    title={item.tabName}
                    selected={this.state.selectedTab===item.tabPage}
                    titleStyle={{color:'black'}}
                    selectedTitleStyle={{color:'#1296DB'}}
                    renderIcon={()=><Image style={styles.tabIcon} source={item.icon}/>}
                    renderSelectedIcon = {() => <Image style={styles.tabIcon} source={item.selectedIcon}/>}
                    // tabStyle={{alignSelf:'center'}}
                    onPress = {() => {this.setState({selectedTab:item.tabPage})}}
                    key={i}
                    >
                    <item.component name="test_name"/>
                </TabNavigator.Item>
              );
         })

         return (
            <View style={styles.container}>
              <TabNavigator
                hidesTabTouch={true}
                >
                  {tabViews}
              </TabNavigator>
            </View>
          );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  tabIcon:{
    width:23,
    height:23,
  }
});