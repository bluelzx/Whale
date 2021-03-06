/**
 * Created by Administrator on 2016/12/27.
 * 我的还款
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity,
    Platform,
    AsyncStorage,
    TextInput,
    ScrollView,
    Dimensions
    } from 'react-native';
var Width = Dimensions.get('window').width; //屏宽

export default class MyReturn extends Component {

    render(){
        return(
            <View style={styles.content}>
                {/*----业务编号及状态------*/}
                <View style={styles.number}>
                    <Text>还款编号：ZJD160912000500</Text>
                    <Text>欠息</Text>
                </View>
                {/*----业务具体内容------*/}
                <View style={styles.contentStyle}>
                    <View style={styles.itemStyles}>
                        {this._renderItem("融资金额:","1750万")}
                        {this._renderItem("融资期限:","1年")}
                    </View>
                    <View style={styles.itemStyles}>
                        {this._renderItem("还款方式:","先息后本")}
                        {this._renderItem("还款日期:","2016/11/10")}
                    </View>
                    <View style={styles.itemStyles}>
                        {this._renderItem("还款总额:","1968.75万")}
                        {this._renderItem("已还总额:","164.06万")}
                    </View>
                </View>

                <View style={styles.number}>
                    <Text>第二期</Text>
                    <Text>1,640,625.00元</Text>
                </View>
            </View>

        );
    }

    _renderItem(title,value){
        return(
            <View style={styles.itemStyle}>
                <Text>{title}</Text>
                <Text>{value}</Text>
            </View>
        );
    }



}

var styles = StyleSheet.create({
    content:{
        flexDirection:'column',
        backgroundColor:'#fff',
        borderRadius:3,
        marginTop:15
    },number:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:10
    },itemStyle:{
        flex:1,
        flexDirection:'row',
        padding:5
    },itemStyles:{
        flexDirection:'row',

    },contentStyle:{
        flexDirection:'column',
        backgroundColor:'#f5f5f5',
        borderRadius:3,
        marginLeft:5,
        marginRight:5
    }
})