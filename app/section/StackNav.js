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
import {MyTabs} from "./TabNav";
import {Pin} from "../views/Pin";

export const LogoRT =  createStackNavigator({
    Users: {
        screen: MyTabs,
        navigationOptions: {
            header: false
        }
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
    Pin: {
        screen: Pin,
    },
    initialRouteName:'Users',
});
