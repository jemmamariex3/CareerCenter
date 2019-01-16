
// As mentioned in the App.js file, all the navigation objects have been made into components so that it is reusable. And it is easier to keep the
// files cleaner.  This is the Tab Navigation object. This takes care of the 4 main navigation in the bottom of the app. (users, cinthy, events and multimedia)
// the icons and changing colors of the icons are handled here. The icons are from the react-native-vector-icons library
// JT 1/15/19

import React, {Component} from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import {Users} from "../views/Users";
import {Cinthy} from "../views/Cinthy";
import {Events} from "../views/Events";
import {Multimedia} from "../views/Multimedia";

import Icon from 'react-native-vector-icons/FontAwesome';

export const MyTabs = createBottomTabNavigator({
        User: {
            screen: Users,
            navigationOptions: {

                tabBarIcon: ({tintColor}) =>
                    <Icon name="users" size={30} color={tintColor}/>
                ,
            }
        },
        Cinthy: {
            screen: Cinthy,
            navigationOptions: {
                // tabBarIcon:({tintColor}) =>
                //     <Icon5 name="earlybirds" size={30} color={tintColor} />
                // ,
                tabBarIcon: <Image style={{width: '50%',height: '80%'}} source={require('../img/Cinthy/cinthy-circle.png')}/>

            }

        },
        Events: {
            screen: Events,
            navigationOptions: {
                tabBarIcon:({tintColor}) =>
                    <Icon name="calendar" size={30} color={tintColor} />
                ,
            }
        },
        Multimedia: {
            screen: Multimedia,
            navigationOptions: {
                tabBarIcon:({tintColor}) =>
                    <Icon name="play-circle-o" size={30} color={tintColor} />
                ,
            }

        }
    }, {
        tabBarOptions: {
            showLabel: false,
            activeTintColor: 'tomato',
            inactiveTintColor: 'rgba(146,161,201,.3)',
            swipeEnabled: true,
            tabBarAccessibilityLabel: true
        }
    }

);
