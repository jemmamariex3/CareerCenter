import React, {Component} from 'react';
import {TouchOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import {MyTabs} from "./app/section/TabNav";
import {LogoRT} from "./app/section/StackNav";

const MyStack =  createStackNavigator({
    Tabs: {
        screen: MyTabs,
        navigationOptions: {
            header: null
        }
    },
    Stack:{
        screen: LogoRT,
    },
    initialRouteName:'Tabs',
});

export default class App extends Component {
    static navigationOptions = {
        header:null
    };
    render() {
        return (
            <MyStack/>
        );
    }
}
