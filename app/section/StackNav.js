// As mentioned in the App.js file, all the navigation objects have been made into components so that it is reusable. And it is easier to keep the
// files cleaner.  This is the Stack Navigation object. This takes care of the navigation for the main buttons (self exploration, counseling, etc)
// Since the main buttons are only seen in the "active" page of the app, I nested tabs into the Users route. This allows me to set it as the initial
// routed component.
// JT 1/15/19

import React, {Component} from 'react';
import {TouchOpacity, Image} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Icon from "react-native-vector-icons/FontAwesome";

import {SelfExploration} from "./skillsContent/SelfExploration";
import {Counseling} from "./skillsContent/Counseling";
import {Resources} from "./skillsContent/Resources";
import {Connections} from "./skillsContent/Connections";
import {Readiness} from "./skillsContent/Readiness";
import {Directions} from "./skillsContent/Directions";
import {MyTabs} from "./TabNav";
import {LogoTitle} from "./LogoTitle";

export const LogoRT =  createStackNavigator({
    Users: {
        screen: MyTabs,

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
    initialRouteName:'Users',

});
