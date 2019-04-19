/*Help.js contains the onboarding content that will appear in the modal when the question mark button is selected
const slides is an array of objects that contain the properties needed for the onboarding element
AppIntroSlider passes that toggle state back up to the parent (User.js) using onDone={this.props.toggleModal2}. This allows us to hide the modal when user
hits done after all the slides.
JT 2/8/19*/


import React, {Component} from 'react';
import {StyleSheet, View, Text, SafeAreaView, Image, Dimensions, PixelRatio} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {ServiceLogo} from './ServicesLogo'
import iPhoneSize from '../src/helper/utils'
import LinearGradient from 'react-native-linear-gradient';
import LottieView from "lottie-react-native";

const {width, height} = Dimensions.get('window')

const size = iPhoneSize();
let marginMain = 0;
let marginLeft = 0;
let marginBottom = 0;
let logoWidth = 242;
let logoHeight = 25;

if(size >= 320 && size <= 350){
    marginMain = 25;
    marginLeft = 35;
    marginBottom = 15;
}else if(size >= 350 && size <= 400){
    marginMain = 40;
    marginLeft = 45;
    textLeft = 35;
    marginBottom = 15;
    logoWidth = 270;
    logoHeight = 28;
}else if(size === 'large'){
    marginMain = 40;
    logoWidth = 270;
    logoHeight = 28;
}

const styles = StyleSheet.create({
    mainContent: {
        display: 'flex',
        // alignItems: 'center',
        justifyContent: 'flex-start',
    },
    imgContainer:{
        width: width,
        height: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ffffff",
    },
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
        height: 200,


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
    exploreTitle:{
        color:'#F8BD58',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize:24,
        textAlign: 'center',
        position:"absolute",
        top: 275
    },
    counselTitle:{
        color:'#E84C37',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize:24,
        textAlign: 'center',
        position:"absolute",
        top: 275
    },
    resourceTitle:{
        color:'#91A1CC',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize:24,
        textAlign: 'center',
        position:"absolute",
        top: 275
    },
    connectionTitle:{
        color:'#2EA4DC',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize:24,
        textAlign: 'center',
        position:"absolute",
        top: 275
    },
    readinessTitle:{
        color:'#5C4C92',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize:24,
        textAlign: 'center',
        position:"absolute",
        top: 275
    },
    directionTitle:{
        color:'#82CFCA',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize:24,
        textAlign: 'center',
        position:"absolute",
        top: 275
    },
    eventsTitle:{
        color:'#b95bef',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize:24,
        textAlign: 'center',
        position:"absolute",
        top: 275
    },
    cinthyTitle:{
        color:'#87ddf4',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize:24,
        textAlign: 'center',
        position:"absolute",
        top: 275
    },
    learningTitle:{
        color:'#7ee77a',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize:24,
        textAlign: 'center',
        position:"absolute",
        top: 275
    },
    service:{
        width: 215,
        height: 41,
        marginLeft: 75
    },
    event:{
        width: 207,
        height: 41,
        marginLeft: 65
    },
    cinthyBanner:{
        width: 200,
        height: 41,
        marginLeft: 65
    },
    learn:{
        width: 275,
        height: 41,
        marginLeft: 30
    },
    logo:{
        width: logoWidth,
        height: logoHeight,
        justifyContent:'center',
        alignItems: 'center',
        marginTop: marginMain,
        marginLeft: marginLeft,
        marginBottom: marginBottom
    },
    text:{
        color: '#ffffff',
        fontSize:14,
        margin: marginMain,
        marginLeft: textLeft,
        fontWeight: "bold",
        textAlign:"center"
    }
});

const slides = [
    {
        key: '1',
        title: 'Self-Exploration',
        text: 'The Career Center offers career services to all currently enrolled CSUN students and eligible alumni',
        image: require('../json/SELF_EXPLORATION_01_v004'),
        banner:require('../img/serviceBanner.png'),
        logo:require('../img/cc_logo_white.png'),
        imageStyle: styles.explore,
        bannerStyle: styles.service,
        logoStyle: styles.logo,
        colors: ['#F48E29', '#FCC74D'],
        textStyle: styles.text,
        titleStyle: styles.exploreTitle

    },
    {
        key: '2',
        title: 'Counseling',
        text: 'The Career Center offers career services to all currently enrolled CSUN students and eligible alumni',
        image: require('../json/COUNSELING_ADVISEMENT_01_v006'),
        banner:require('../img/serviceBanner.png'),
        logo:require('../img/cc_logo_white.png'),
        imageStyle: styles.counsel,
        bannerStyle: styles.service,
        logoStyle: styles.logo,
        colors: ['#E84C37', '#E67D2F'],
        textStyle:styles.text,
        titleStyle: styles.counselTitle
    },
    {
        key: '3',
        title: 'Resources',
        text: 'The Career Center offers career services to all currently enrolled CSUN students and eligible alumni',
        image: require("../json/CAREER_RESOURCES_01_v004"),
        banner:require('../img/serviceBanner.png'),
        logo:require('../img/cc_logo_white.png'),
        imageStyle: styles.resource,
        bannerStyle: styles.service,
        logoStyle: styles.logo,
        colors: ['#6078DD', '#91A1CC'],
        textStyle:styles.text,
        titleStyle: styles.resourceTitle
    },
    {
        key: '4',
        title: 'Connections',
        text: 'The Career Center offers career services to all currently enrolled CSUN students and eligible alumni',
        image:require("../json/WORKPLACE_CONNECTIONS_01_v002"),
        banner:require('../img/serviceBanner.png'),
        logo:require('../img/cc_logo_white.png'),
        imageStyle: styles.connect,
        bannerStyle: styles.service,
        logoStyle: styles.logo,
        colors: ['#2EA4DC', '#70DAF4'],
        textStyle:styles.text,
        titleStyle: styles.connectionTitle

    },
    {
        key: '5',
        title: 'Readiness',
        text: 'The Career Center offers career services to all currently enrolled CSUN students and eligible alumni',
        image: require("../json/WORKPLACE_READINESS_01_v004"),
        banner:require('../img/serviceBanner.png'),
        logo:require('../img/cc_logo_white.png'),
        colors: ['#5C4C92', '#6972E3'],
        imageStyle: styles.ready,
        bannerStyle: styles.service,
        logoStyle: styles.logo,
        textStyle:styles.text,
        titleStyle: styles.readinessTitle

    },
    {
        key: '6',
        title: 'Direction',
        text: 'The Career Center offers career services to all currently enrolled CSUN students and eligible alumni',
        image: require("../json/DIRECTION_01_v002"),
        banner:require('../img/serviceBanner.png'),
        logo:require('../img/cc_logo_white.png'),
        colors: ['#82CFCA', '#84D6AD'],
        imageStyle: styles.direction,
        bannerStyle: styles.service,
        logoStyle: styles.logo,
        textStyle:styles.text,
        titleStyle: styles.directionTitle

    },
    {
        key: '7',
        title: 'Events',
        text: 'The Career Center hosts a broad array of Career Fairs, Employer Info Sessions, and Workshops/Programs. For full details and how to reserve your slot for Info Session, Workshops and Networking Events, login to SUNlink.',
        image: require("../json/EVENTS_01_v002"),
        banner:require('../img/eventsBanner.png'),
        logo:require('../img/cc_logo_white.png'),
        colors: ['#4E92EF', '#C655F0'],
        imageStyle: styles.ready,
        bannerStyle: styles.event,
        logoStyle: styles.logo,
        textStyle:styles.text,
        titleStyle: styles.eventsTitle

    },
    {
        key: '8',
        title: 'Cinthy',
        text: 'Chat with the Career Center mascot Cinthy and ask her any questions you have.',
        image: require("../json/WORKPLACE_READINESS_01_v004"),
        banner:require('../img/cinthyBanner.png'),
        logo:require('../img/cc_logo_white.png'),
        colors: ['#FFE838', '#81DDFF'],
        imageStyle: styles.cinthy,
        bannerStyle: styles.cinthyBanner,
        logoStyle: styles.logo,
        textStyle:styles.text,
        titleStyle: styles.cinthyTitle

    },
    {
        key: '9',
        title: 'E-Learning',
        text: 'Access tutorials and videos to learn more about the Career Center.',
        image: require("../json/E_LEARNING_01_v001"),
        banner:require('../img/learningBanner.png'),
        logo:require('../img/cc_logo_white.png'),
        colors: ['#76E85B', '#69D7FF'],
        imageStyle: styles.eLearning,
        bannerStyle: styles.learn,
        logoStyle: styles.logo,
        textStyle:styles.text,
        titleStyle: styles.learningTitle
    },
];

export class Help extends Component {
    static navigationOptions = {
        header:null
    };

    
    _renderItem = props =>(
        <LinearGradient
            style={[styles.mainContent, {
                width: props.width,
                height: props.height,
            }]}
            colors={props.colors}
            start={{x: 0, y: .1}} end={{x: .1, y: 1}}
        >
            <SafeAreaView style={styles.mainContent}>
                <Image source={props.logo} style={props.logoStyle}/>
                <Image source={props.banner} style={props.bannerStyle}/>
                <View style={styles.imgContainer}>
                    <LottieView
                        ref={animation => {
                            this.animation = animation;
                        }}
                        autoPlay={true}
                        style={styles.lottie}
                        source={props.image}
                    />
                    {/*<Image source={props.image} style={props.imageStyle}/>*/}
                    <Text style={props.titleStyle}>{props.title}</Text>
                </View>
                <Text style={props.textStyle}>{props.text}</Text>
            </SafeAreaView>
        </LinearGradient>
    )
    render() {
        return (
            <SafeAreaView>
                <AppIntroSlider slides={slides} renderItem={this._renderItem} onDone={this.props.toggleModal2} showSkipButton={true} onSkip={this.props.toggleModal2} showPrevButton={true}/>
            </SafeAreaView>
            )
    }
}



