import React, {Component} from 'react';
import {TouchOpacity, Image, View} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import {MyTabs} from "./app/section/TabNav";
import {LogoRT} from "./app/section/StackNav";
import SplashScreen from 'react-native-splash-screen';
import {onBoarding} from "./app/section/onBoarding";

// App.js contains the nested navigation of the app. All the navigations(stack and tabs) are individual components that are
// imported in this file. The stack object includes the tab object and is rendered in the class "App".
// -JT 2/4/19

const MyStack =  createStackNavigator({
    onBoardingRT:{
        screen: onBoarding,
    },
    Tabs: {
        screen: MyTabs,
        navigationOptions: {
            header: null
        }
    },
    Stack:{
        screen: LogoRT,
    },
    initialRouteName:'onBoardingRT',
});

export default class App extends Component {
    componentDidMount(){
        SplashScreen.hide();
    }
    static navigationOptions = {
        header:null
    };
    render() {
        return (
            <MyStack/>
        );
    }
}
