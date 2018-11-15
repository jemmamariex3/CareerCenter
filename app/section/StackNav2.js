import React, {Component} from 'react';
import {TouchOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Icon from "react-native-vector-icons/FontAwesome";

import {SelfExploration} from "./skillsContent/SelfExploration";
import {Counseling} from "./skillsContent/Counseling";
import {Resources} from "./skillsContent/Resources";
import {Connections} from "./skillsContent/Connections";
import {Readiness} from "./skillsContent/Readiness";
import {Directions} from "./skillsContent/Directions";
import {MyTabs2} from "./TabNav2";
import {MyDrawer} from "./DrawerNav";

export const LogoRT2 =  createStackNavigator({
    Home: {
        screen: MyTabs2,
    },
    Drawer:{
        screen: MyDrawer
    },
    ExplorationRT: {
        screen: SelfExploration,

    },
    CounselingRT: {
        screen: Counseling,
    },
    ResourcesRT: {
        screen: Resources,
    },
    ConnectionsRT: {
        screen: Connections,
    },
    ReadinessRT: {
        screen: Readiness,
    },
    DirectionsRT: {
        screen: Directions,
    },
    initialRouteName:'Home',
});
