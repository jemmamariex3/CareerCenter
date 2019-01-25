// Help.js contains the onboarding content that will appear in the modal when the question mark button is selected

// const slides is an array of objects that contain the properties needed for the onboarding element

// TODO: play with the text and title styling
// TODO: adjust the width of the slides to fit the text without cutting
// JT 1/25/19


import React, {Component} from 'react';
import { StyleSheet,View, Text, SafeAreaView } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {ServiceLogo} from './ServicesLogo'

const styles = StyleSheet.create({
    explore: {
        width: 280,
        height: 184,
    },
    counsel:{
        width: 272,
        height: 192,
    },
    resource:{
        width: 250,
        height: 209,
    },
    connect:{
        width: 278,
        height: 189,
    },
    ready:{
        width: 277,
        height: 158,
    },
    direction:{
        width: 276,
        height: 191,
    },
    events:{
        width: 249,
        height: 142,
    },
    cinthy:{
        width: 264,
        height: 191,
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
    },
    onBoard:{
        marginLeft: -30,
    },
    text:{
        color: '#ffffff',
        fontSize:15
    }
});

const slides = [
    {
        key: 1,
        title: 'Services',
        text: 'Self-Exploration\nThe Career Center offers career services to all currently enrolled CSUN students and eligible alumni',
        image: require('../img/Exploration/Alvin_SE_illustration_vector_015-05.png'),
        imageStyle: styles.explore,
        backgroundColor: '#F6BA61',
        textStyle:styles.text,
    },
    {
        key: 2,
        title: 'Services',
        text: 'Other cool stuff',
        image: require('../img/Counseling/Alvin_SE_illustration_vector_015-04.png'),
        imageStyle: styles.connect,
        backgroundColor: '#E84C3D',
    },
    {
        key: 3,
        title: 'Services',
        text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
        image: require('../img/Resources/Alvin_SE_illustration_vector_015-06.png'),
        imageStyle: styles.resource,
        backgroundColor: '#8297CA',
    },
    {
        key: 4,
        title: 'Services',
        text: 'Description.\nSay something cool',
        image: require('../img/Connections/Alvin_SE_illustration_vector_015-08.png'),
        imageStyle: styles.connect,
        backgroundColor: '#59b2ab',
    },
    {
        key: 5,
        title: 'Services',
        text: 'Other cool stuff',
        image: require('../img/Readiness/Alvin_SE_illustration_vector_015-07.png'),
        imageStyle: styles.ready,
        backgroundColor: '#5B4D90',
    },
    {
        key: 6,
        title: 'Services',
        text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
        image: require('../img/Direction/Alvin_SE_illustration_vector_015-09.png'),
        imageStyle: styles.direction,
        backgroundColor: '#84CDC9',
    },
];

export class Help extends Component {
    static navigationOptions = {
        header:null
    };

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SafeAreaView>
                <AppIntroSlider contentContainerStyle={styles.onBoard} slides={slides} onDone={this.props.toggleModal2}/>
            </SafeAreaView>
            )
    }
}



