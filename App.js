import React, {Component} from 'react';
import {TouchOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import {MyTabs} from "./app/section/TabNav";
import {LogoRT} from "./app/section/StackNav";

// App.js contains the nested navigation of the app. All the navigations(stack and tabs) are individual components that are
// imported in this file. The stack object includes the tab object and is rendered in the class "App". -JT 1/15/19|

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
