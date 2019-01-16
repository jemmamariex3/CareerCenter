import React, {Component} from 'react';
import { StyleSheet,View, Text } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {MyTabs} from "../section/TabNav.js";

const styles = StyleSheet.create({
    explore: {
        width: 280,
        height: 184,
    },
    counsel:{
        width: 341,
        height: 240,
    },
    resource:{
        width: 313,
        height: 262,
    },
    connect:{
        width: 348,
        height: 237,
    },
    ready:{
        width: 347,
        height: 198,
    },
    direction:{
        width: 345,
        height: 239,
    },
    events:{
        width: 312,
        height: 178,
    },
    cinthy:{
        width: 330,
        height: 212,
    },
    eLearning:{
        width: 287,
        height: 239,
    },
    pin:{
        width: 25,
        height: 25
    },
    title:{
        fontWeight: 'bold',
        color:'#5b4d90',
        textTransform: 'uppercase',
        fontSize:14,
        textAlign: 'center'
    },
    info:{
        textAlign: 'center',
        color: '#E84C37',
        fontWeight: 'bold'
    },
    subInfo:{
        fontSize: 12
    }
});

const slides = [
    {
        key: 1,
        title: 'Services',
        text: 'Description.\nSay something cool',
        image: require('../img/Exploration/Alvin_SE_illustration_vector_015-05.png'),
        imageStyle: styles.explore,
        backgroundColor: '#59b2ab',
    },
    {
        key: 2,
        title: 'Services',
        text: 'Other cool stuff',
        image: require('../img/Counseling/Alvin_SE_illustration_vector_015-04.png'),
        imageStyle: styles.image,
        backgroundColor: '#febe29',
    },
    {
        key: 3,
        title: 'Services',
        text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
        image: require('../img/Resources/Alvin_SE_illustration_vector_015-06.png'),
        imageStyle: styles.image,
        backgroundColor: '#22bcb5',
    }
];
export class Help extends Component {
    static navigationOptions = {
        header:null
    };

    constructor(props) {
        super(props);
        this.state = {
            showRealApp: false,
        };
    }
    _onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        this.setState({ showRealApp: true });
    };
    render() {
        if (this.state.showRealApp) {
            return null;
        }
        else {
            return <AppIntroSlider slides={slides} onDone={this._onDone}/>;
        }
    }
}



