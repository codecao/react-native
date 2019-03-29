/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  // Platform,
  // StyleSheet,
  // Text,
  // View,
  // PixelRatio,
  // Image,
  // Dimensions,
  // ScrollView,
  // TextInput

  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator, 
  FlatList, 
  ScrollView,
  RefreshControl,
  Dimensions,
  TextInput
} from 'react-native';
import List from './List';
import Swiper from 'react-native-swiper';
import testData from './Data';
import RefreshListView, { RefreshState } from 'react-native-refresh-list-view'
import ScreenUtil from '../utils/ScreenUtil';
let {win_width,win_height} = Dimensions.get('window');
const REQUEST_URL = 'https://api.github.com/search/repositories?q=ALL&sort=stars';


type props = {}
export default class Index extends Component<props>{

  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      //网络请求状态
      error: false,
      errorInfo: "",
      dataArray: [],
    }
  }
 
  componentDidMount() {
    console.log("componentDidMount..............");
    this._fetchData(); 
  }


  _fetchData(){
    console.log("_fetchData..............");
    fetch(REQUEST_URL).then((response)=>response.json())
                      .then((data)=>{
                          let datalist = data.items;
                          let dataBlog = [];
                          let i = 0;
                  
                          datalist.map((item) => {
                            dataBlog.push({
                              key:i,
                              value:item
                            })
                            i++;
                          })
                  
                          this.setState({
                            dataArray:dataBlog,
                            isLoading:false,
                          })
                  
                          datalist = null;
                          dataBlog = null;
                      })
                      .catch((error=>{
                        this.setState({
                          error:true,
                          errorInfo:err
                        })
                      }))
                      .done()
  }; 
  

  _renderItemView(item){
    return (
      <View style={styles.cellStyle}>
          <Text>{item.item.value.description}</Text>
      </View>
    )
  }

  renderLoadingView(){
    return (
       <View style={styles.container}>
          <ActivityIndicator
              animating={true}
              style={{height: 80}}
              color='red'
              size="large"
          />
      </View>
    )
  }


  //加载失败view
  renderErrorView(error) {
    return (
        <View style={styles.container}>
            <Text>
                Fail: {error}
            </Text>
        </View>
    );
  }


  _renderFlatlist(){

    // 第一次加载等待的view
    if (this.state.isLoading && !this.state.error) {
        return this.renderLoadingView();
    } else if (this.state.error) {
        //请求失败view
        return this.renderErrorView(this.state.errorInfo);
    }

    return (
      <ScrollView>
        <FlatList 
            data={this.state.dataArray}
            renderItem={(item)=>this._renderItemView(item)}
            keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    )    
  }


  render(){
    console.log("render..............");
    return (
              <View style={styles.container}>
                    <View style={styles.searchContainer}>
                                <Image source={require('../../images/find/search.png')}  style={{width:25,height: 25}} ></Image>
                                <TextInput
                                    style={styles.textInput}
                                    onChangeText={(text) => this.setState({text})}
                                    placeholder="搜索"
                                    placeholderTextColor="gray"
                                    returnKeyType="search"
                                    underlineColorAndroid="transparent"
                                  />
                    </View>
                    {this._renderFlatlist()}
              </View>
    );
  }
}

const styles = StyleSheet.create({
    searchContainer:{
        backgroundColor:"#e5e5e5",
        flexDirection:"row",
        alignItems:"center",
        marginRight:10,
        marginLeft:10,
        borderRadius:4,
        paddingLeft:10,
        marginTop:10,
        marginBottom:10,
    },
    textInput:{
      height: 45,
      width:390, 
      borderColor: 'gray',
      fontSize:18
    },

    container: {
      flex: 1
    },
    cellStyle:{
      flex: 1,
      backgroundColor: 'white',
      padding: 10,
      paddingVertical:20,
      marginLeft: 5,
      marginRight: 5,
      marginVertical: 3,
      borderColor: '#dddddd',
      borderStyle: null,
      borderWidth: 0.5,
      borderRadius: 2,
      shadowColor: 'gray',    // 设置阴影
      shadowOffset: {width:0.5, height: 0.5},  
      shadowOpacity: 0.4,   // 透明度
      shadowRadius: 1,
      elevation:2   //   高度，设置Z轴，可以产生立体效果
    }
  
   
})
