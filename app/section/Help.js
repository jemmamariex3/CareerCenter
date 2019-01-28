// Help.js contains the onboarding content that will appear in the modal when the question mark button is selected
// const slides is an array of objects that contain the properties needed for the onboarding element
// JT 1/25/19


import React, {Component} from 'react';
import { StyleSheet,View, Text, SafeAreaView } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {ServiceLogo} from './ServicesLogo'

const styles = StyleSheet.create({
    explore: {
        width: 315,
        height: 208,
    },
    counsel:{
        width: 307,
        height: 216,
    },
    resource:{
        width: 282,
        height: 236,
    },
    connect:{
        width: 312,
        height: 178,
    },
    ready:{
        width: 312,
        height: 178,
    },
    direction:{
        width: 311,
        height: 215,
    },
    events:{
        width: 281,
        height: 160,
    },
    cinthy:{
        width: 297,
        height: 191,
    },
    eLearning:{
        width: 258,
        height: 215,
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
        marginLeft: -20,
    },
    text:{
        color: '#ffffff',
        fontSize:14,
        margin: 20,
        fontWeight: "bold"
    }
});

const slides = [
    {
        key: 1,
        title: 'Self-Exploration',
        text: 'The Career Center offers career services to all currently enrolled CSUN students and eligible alumni',
        image: require('../img/Exploration/Alvin_SE_illustration_vector_015-05.png'),
        imageStyle: styles.explore,
        backgroundColor: '#F6BA61',
        textStyle:styles.text,
    },
    {
        key: 2,
        title: 'Counseling',
        text: 'The Career Center offers career services to all currently enrolled CSUN students and eligible alumni',
        image: require('../img/Counseling/Alvin_SE_illustration_vector_015-04.png'),
        imageStyle: styles.connect,
        backgroundColor: '#E84C3D',
        textStyle:styles.text,
    },
    {
        key: 3,
        title: 'Resources',
        text: 'The Career Center offers career services to all currently enrolled CSUN students and eligible alumni',
        image: require('../img/Resources/Alvin_SE_illustration_vector_015-06.png'),
        imageStyle: styles.resource,
        backgroundColor: '#8297CA',
        textStyle:styles.text,
    },
    {
        key: 4,
        title: 'Connections',
        text: 'The Career Center offers career services to all currently enrolled CSUN students and eligible alumni',
        image: require('../img/Connections/Alvin_SE_illustration_vector_015-08.png'),
        imageStyle: styles.connect,
        backgroundColor: '#59b2ab',
        textStyle:styles.text,
    },
    {
        key: 5,
        title: 'Readiness',
        text: 'The Career Center offers career services to all currently enrolled CSUN students and eligible alumni',
        image: require('../img/Readiness/Alvin_SE_illustration_vector_015-07.png'),
        imageStyle: styles.ready,
        backgroundColor: '#5B4D90',
        textStyle:styles.text,
    },
    {
        key: 6,
        title: 'Direction',
        text: 'The Career Center offers career services to all currently enrolled CSUN students and eligible alumni',
        image: require('../img/Direction/Alvin_SE_illustration_vector_015-09.png'),
        imageStyle: styles.direction,
        backgroundColor: '#84CDC9',
        textStyle:styles.text,
    },
    {
        key: 7,
        title: 'Events',
        text: 'The Career Center hosts a broad array of Career Fairs, Employer Info Sessions, and Workshops/Programs. For full details and how to reserve your slot for Info Session, Workshops and Networking Events, login to SUNlink.',
        image: require('../img/Events/eventsLogo.png'),
        imageStyle: styles.events,
        backgroundColor: '#C655F0',
        textStyle:styles.text,
    },
    {
        key: 8,
        title: 'Cinthy',
        text: 'Chat with the Career Center mascot Cinthy and ask her any questions you have.',
        image: require('../img/Cinthy/cinthyLogo.png'),
        imageStyle: styles.cinthy,
        backgroundColor: '#81DDFF',
        textStyle:styles.text,
    },
    {
        key: 9,
        title: 'E-Learning',
        text: 'Access tutorials and videos to learn more about the Career Center.',
        image: require('../img/Elearning/elearning.png'),
        imageStyle: styles.eLearning,
        backgroundColor: '#76E85B',
        textStyle:styles.text,
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



