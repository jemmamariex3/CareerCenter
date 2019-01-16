// Users.js contains the 6 mains buttons. and the modals for the pin and help button.
// _showModal and _hideModal handles the state of the modals. (determines if they are shown or hidden)
// the modals are from the react-native-modal library.

//Navigation:
// the  onPress={() => navigate('...')} within each TouchableOpacity button is a bit confusing.
// since these 6 skills are specifically listed within the stack object, they passed down the navigate() function as a prop.
// once nested, the prop needs to be manually passed through the component. Please read into the react-navigation docs if needed
// for now there is no need to mess with the navigation structure.

//There are both stylesheet styling and inline styling.
// JT 1/15/19


import React, {Component} from 'react';
import {TouchableOpacity,StatusBar,Platform, StyleSheet, Text, SafeAreaView,View, Image, Button, ScrollView, Dimensions} from 'react-native';
import {MainLogo} from "../img/career_center_logo.png";
import Modal from 'react-native-modal';
import {Pin} from "./Pin";
import {Help} from "./Help";

export class Users extends Component<Props> {
    static navigationOptions = {
        header:null
    };
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible1: false,
            isModalVisible2: false
        }
    }
    _showModal1 = () => this.setState({ isModalVisible1: true })
    _hideModal1 = () => this.setState({ isModalVisible1: false })

    _showModal2 = () => this.setState({ isModalVisible2: true })
    _hideModal2 = () => this.setState({ isModalVisible2: false })
    render() {
        const { navigate } = this.props.navigation;
        return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={this._showModal1}><Image style={styles.pin} source={require("../img/pin.png")}/></TouchableOpacity>
                <Image style={styles.cclogo} source={require('../img/CC_logo.png')}/>
                <TouchableOpacity onPress={this._showModal2}><Image style={styles.help} source={require("../img/help.png")}/></TouchableOpacity>
            </View>
            <Modal
                isVisible={this.state.isModalVisible1}
                animationType = "fade"
                onBackdropPress={() => this.setState({ isVisible1: false })}
                backdropOpacity={.50}
                animationInTiming={200}
                animationOutTiming={200}
            >
                <SafeAreaView style={styles.pinContainer}>
                    <ScrollView style={styles.scrollContainer}>
                        <Pin/>
                    </ScrollView>
                    <Button
                        title="Return to Menu"
                        onPress={this._hideModal1}
                        style={styles.exit}
                    />
                </SafeAreaView>

            </Modal>

            <Modal
                isVisible={this.state.isModalVisible2}
                animationType = "fade"
                onBackdropPress={() => this.setState({ isVisible2: false })}
                backdropOpacity={.50}
                animationInTiming={200}
                animationOutTiming={200}
            >
                <Help/>
                <Button
                    title="Return to Menu"
                    onPress={this._hideModal2}
                    style={styles.exit}
                />

            </Modal>

            {/*MAJOR BUTTONS*/}
            <TouchableOpacity onPress={() => navigate('ExplorationRT')}>
                <View style={[styles.button2, styles.btnback,{backgroundColor:'#f6ba61',shadowColor:'#f6ba61'}]}></View>
                <View style={[styles.button,styles.btnfront,{borderColor: '#f6ba61',backgroundColor: '#fefbf5'}]}>
                    <Image style={styles.cc_logo} source={require('../img/Self-Exploration.png')}/>
                    <View style={styles.text_box}>
                        <Text style={[styles.textLabel,{color:'#F6BA61'}]}>
                        Self-Exploration
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('CounselingRT')}>
                <View style={[styles.button2, styles.btnback,{shadowColor:'#e84c3d',backgroundColor:'#e84c3d'}]}></View>
                <View style={[styles.button,{borderColor: '#e84c3d',backgroundColor: '#fdf5f4'}]}>
                    <Image style={styles.cc_logo} source={require('../img/Counseling.png')}/>
                    <View style={styles.text_box}>
                        <Text style={[styles.textLabel,{color:'#E84C3D'}]}>
                        Counseling
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('ResourcesRT')}>
                <View style={[styles.button2, styles.btnback,{shadowColor:'#8297CA',backgroundColor:'#8297CA'}]}></View>
                <View style={[styles.button,{borderColor: '#8297CA',backgroundColor: '#f8f9fc'}]}>
                    <Image style={styles.cc_logo} source={require('../img/CareerResources.png')}/>
                    <View style={styles.text_box}>
                        <Text style={[styles.textLabel,{color:'#8297CA'}]}>
                        Resources
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('ConnectionsRT')}>
                <View style={[styles.button2, styles.btnback,{shadowColor:'#36a3db',backgroundColor:'#36a3db'}]}></View>
                <View style={[styles.button,{borderColor: '#36a3db',backgroundColor: '#f3fafd'}]}>
                    <Image style={styles.cc_logo} source={require('../img/Workplace_Connections.png')}/>
                    <View style={styles.text_box}>
                        <Text style={[styles.textLabel,{color:'#36A3DB'}]}>
                        Connections
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('ReadinessRT')}>
                <View style={[styles.button2, styles.btnback,{shadowColor:'#5b4d90',backgroundColor:'#5b4d90'}]}></View>
                <View style={[styles.button,{borderColor: '#5b4d90',backgroundColor: '#f6f5f9'}]}>
                    <Image style={styles.cc_logo} source={require('../img/Workplace_Readiness.png')}/>
                    <View style={styles.text_box}>
                        <Text style={[styles.textLabel,{color:'#5B4D90'}]}>
                        Readiness
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('DirectionsRT')}>
                <View style={[styles.button2, styles.btnback,{shadowColor:'#84cdc9',backgroundColor:'#84cdc9'}]}></View>
                <View style={[styles.button,{borderColor: '#84cdc9',backgroundColor: '#f8fcfc'}]}>
                    <Image style={styles.cc_logo} source={require('../img/Direction.png')}/>
                    <View style={styles.text_box}>
                        <Text style={[styles.textLabel,{color:'#84CDC9'}]}>
                        Directions
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        margin:0,
        justifyContent:'space-around',
        backgroundColor:'rgba(222,228,242,.30)'
    },
    cclogo:{
        width: 250,
        height: 25
    },
    cc_logo:{
        width: '15%',
        height: '80%',
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
    header:{
        flexDirection: 'row',
        justifyContent:'space-around',
    },
    button:{
        flexDirection: 'row',
        width: 330,
        height: 67,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#dedede',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'auto',
        marginBottom:'auto',

    },
    button2:{
        flexDirection: 'row',
        width: 330,
        height: 67,
        borderRadius: 30,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'auto',
        marginBottom:'auto',
    },
    btnFront:{
        position: 'absolute'
    },
    // title:{
    //     position: 'absolute',
    //     width: 350,
    //     top: 480,
    //     left: 30,
    btnback:{
        position: 'absolute',
        left: 30,
        shadowOpacity: 0.5,
        shadowRadius: 1,
        shadowOffset: {
            height: 1,
            width: 8
        }
    },
    text_box:{
        width: 200,
        height: 40,
        // backgroundColor:'red',
        marginTop:'auto',
        marginBottom:'auto',
        marginLeft:20,
        marginRight:'auto',

    },
    textLabel:{
        textAlign:'center',
        marginTop:'auto',
        marginBottom:'auto',
        fontWeight:'bold',
        fontFamily: 'Arial-BoldMT',
        fontSize:20
    },

    // HELP MODAL STYLING
    help:{
        width: 23,
        height: 23
    },

    //PIN MODAL STYLING
    pinContainer:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#DCDCDC",
        borderRadius: 18,
        borderColor: "#C0C0C0",
        borderWidth: 2,
        marginHorizontal: 15,
        marginVertical: 10,
        width: 310,
        height:480,
    },
     pin:{
         width: 25,
         height: 25
     },
    scrollContainer:{
        margin: 20
    },
    exit:{
        marginLeft: 50,
        padding: 0,
        width: 20,
        height: 20
    },

});
