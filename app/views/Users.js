// Users.js contains the 6 mains buttons. and the modals for the pin and help button.
// _showModal and _hideModal handles the state of the modals. (determines if they are shown or hidden)
// the modals are from the react-native-modal library.
// toggleModal2 is a function that closes the help modal directly using isModalVisible2 instead of using the _showModal2 and _hideModal2
// It takes in the state change from its child (Help.js) through onDone={this.props.toggleModal2}.

//Navigation:
// the  onPress={() => navigate('...')} within each TouchableOpacity button is a bit confusing.
// since these 6 skills are specifically listed within the stack object, they passed down the navigate() function as a prop.
// once nested, the prop needs to be manually passed through the component. Please read into the react-navigation docs if needed
// for now there is no need to mess with the navigation structure.

//binded function toggleModel2 to constructor.
//purpose of the function is to help toggle states within the child component, Event.js (./Help.js)
//toggleModel2 is passed entirely in the Help component line 87 as an attribute.
//state is switched in child component and is sent back into the parent component (Users.js) and toggles isModalVisible2 to false
//isModalVisible2 will close the second modal. JT 1/25/19
// for ios android interface:
// const { width, height } = Dimensions.get('window');

// const isIphoneX =
//   Platform.OS === 'ios' &&
//   !Platform.isPad &&
//   !Platform.isTVOS &&
//   (height === 812 || width === 812);
//
// const isAndroidRTL = I18nManager.isRTL && Platform.OS === 'android';
// JT 3/1/19


import React, {Component} from 'react';
import {TouchableOpacity, PixelRatio,StyleSheet, Text, SafeAreaView,View, Image, Dimensions} from 'react-native';
import {Header} from '../section/Header';
import iPhoneSize from '../src/helper/utils'

const size = iPhoneSize();
let buttonWidth = '100%';
let buttonHeight = 57;
let button2Width = '90%';
let button2Height = 57;

if(size === 'medium'){
    buttonHeight = 67;
    button2Height = 67;
}else if(size === 'large'){
    buttonHeight = 75;
    button2Height = 75;
}
export class Users extends Component<Props> {
    static navigationOptions = {
        header:null
    };
    constructor(props){
        super(props);
        alert(iPhoneSize());
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <TouchableOpacity onPress={() => navigate('ExplorationRT')}>
                <View style={[styles.button2, styles.btnback,{backgroundColor:'#f6ba61',shadowColor:'#f6ba61'}]}>
                    <View style={[styles.button,styles.btnfront,{borderColor: '#f6ba61',backgroundColor: '#fefbf5'}]}>
                        <Image style={styles.cc_logo} source={require('../img/Self-Exploration.png')}/>
                        <View style={styles.text_box}>
                            <Text style={[styles.textLabel,{color:'#F6BA61'}]}>
                            Self-Exploration
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('CounselingRT')}>
                <View style={[styles.button2, styles.btnback,{shadowColor:'#e84c3d',backgroundColor:'#e84c3d'}]}>

                    <View style={[styles.button,{borderColor: '#e84c3d',backgroundColor: '#fdf5f4'}]}>
                        <Image style={styles.cc_logo} source={require('../img/Counseling.png')}/>
                        <View style={styles.text_box}>
                            <Text style={[styles.textLabel,{color:'#E84C3D'}]}>
                                Counseling
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('ResourcesRT')}>
                <View style={[styles.button2, styles.btnback,{shadowColor:'#8297CA',backgroundColor:'#8297CA'}]}>

                    <View style={[styles.button,{borderColor: '#8297CA',backgroundColor: '#f8f9fc'}]}>
                        <Image style={styles.cc_logo} source={require('../img/CareerResources.png')}/>
                        <View style={styles.text_box}>
                            <Text style={[styles.textLabel,{color:'#8297CA'}]}>
                                Resources
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('ConnectionsRT')}>
                <View style={[styles.button2, styles.btnback,{shadowColor:'#36a3db',backgroundColor:'#36a3db'}]}>

                    <View style={[styles.button,{borderColor: '#36a3db',backgroundColor: '#f3fafd'}]}>
                        <Image style={styles.cc_logo} source={require('../img/Workplace_Connections.png')}/>
                        <View style={styles.text_box}>
                            <Text style={[styles.textLabel,{color:'#36A3DB'}]}>
                                Connections
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('ReadinessRT')}>
                <View style={[styles.button2, styles.btnback,{shadowColor:'#5b4d90',backgroundColor:'#5b4d90'}]}>

                    <View style={[styles.button,{borderColor: '#5b4d90',backgroundColor: '#f6f5f9'}]}>
                        <Image style={styles.cc_logo} source={require('../img/Workplace_Readiness.png')}/>
                        <View style={styles.text_box}>
                            <Text style={[styles.textLabel,{color:'#5B4D90'}]}>
                                Readiness
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('DirectionsRT')}>
                <View style={[styles.button2, styles.btnback,{shadowColor:'#84cdc9',backgroundColor:'#84cdc9'}]}>

                    <View style={[styles.button,{borderColor: '#84cdc9',backgroundColor: '#f8fcfc'}]}>
                        <Image style={styles.cc_logo} source={require('../img/Direction.png')}/>
                        <View style={styles.text_box}>
                            <Text style={[styles.textLabel,{color:'#84CDC9'}]}>
                                Directions
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        display: 'flex',
        flex: 1,
        paddingTop: 0,
        justifyContent:'space-around',
        alignItems:'center',
        alignSelf: 'stretch',
        backgroundColor:'rgba(222,228,242,.30)',
        marginLeft: -5
    },
    cc_logo:{
        width: '17%',
        height: '90%',
        marginTop:'auto',
        marginBottom:'auto',
        marginLeft:8,
    },
    welcome: {
        fontSize: 20,
            textAlign: 'center',
            margin: 10,
    },
    instructions: {
        textAlign: 'center',
            color: '#333333',
            marginBottom: 5,
    },
    button:{
        flexDirection: 'row',
        width: buttonWidth,
        height: buttonHeight,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#dedede',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'auto',
        marginBottom:'auto',

    },
    button2:{
        flexDirection: 'row',
        width: button2Width,
        height: button2Height,
        borderRadius: 50,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'auto',
        marginBottom:'auto',
    },
    btnFront:{
        position: 'absolute'
    },
    btnback:{
        shadowOpacity: 0.5,
        shadowRadius: 1,
        shadowOffset: {
            height: 1,
            width: 8
        },
        zIndex: -1
    },
    text_box:{
        justifyContent:'center',
        width:'70%',        
        height: 40,
        // backgroundColor:'red',
        marginTop:'auto',        
        marginBottom:'auto',
    },
    textLabel:{
        // backgroundColor:'pink',
        textAlign:'center',        
        fontWeight:'bold',
        fontFamily: 'Arial-BoldMT',
        fontSize:20
    },

});
