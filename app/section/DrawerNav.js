import React, { Component } from 'react';
import {createDrawerNavigator} from 'react-navigation';
import Icon from "react-native-vector-icons/FontAwesome";

import {Home} from "../views/Home.js";
import {Users} from "../views/Users.js";
import {Cinthy} from "../views/Cinthy.js";
import {Events} from "../views/Events.js";
import {Multimedia} from "../views/Multimedia.js";

export const MyDrawer = createDrawerNavigator({
    DrawerItem1: {
        screen: Home,
        // navigationOptions: {
        //     drawerLabel: "Home",
        //     // drawerIcon: ({ tintColor }) => <Icon name="rocket" size={24} />
        // },
    },
    DrawerItem2: {
        screen: Users,
        // navigationOptions: {
        //     drawerLabel: "Users",
        //     // drawerIcon: ({ tintColor }) => <Icon name="rocket" size={24} />
        // },
    },
    DrawerItem3: {
        screen: Cinthy,
        // navigationOptions: {
        //     drawerLabel: "Cinthy",
        //     // drawerIcon: ({ tintColor }) => <Icon name="rocket" size={24} />
        // },
    },
    DrawerItem4: {
        screen: Events,
        // navigationOptions: {
        //     drawerLabel: "Events",
        //     // drawerIcon: ({ tintColor }) => <Icon name="rocket" size={24} />
        // },
    },
    DrawerItem5: {
        screen: Multimedia,
        // navigationOptions: {
        //     drawerLabel: "Multimedia",
        //     // drawerIcon: ({ tintColor }) => <Icon name="rocket" size={24} />
        // },
    },
});
