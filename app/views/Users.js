import React, {Component} from 'react';
import {TouchableOpacity,StatusBar,Platform, StyleSheet, Text, SafeAreaView,View, Image} from 'react-native';
import {MainLogo} from "../img/career_center_logo.png";
import {Pin} from "./Pin";

// const instructions = Platform.select({
//     ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//     android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
//
// type Props = {};
/*try a different menu more linear*/

export class Users extends Component<Props> {
    static navigationOptions = {
        header:null
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Pin/>
                    {/*<TouchableOpacity onPress={() => navigate('Pin')}><Image style={styles.pin} source={require("../img/pin.png")}/></TouchableOpacity>*/}
                    <Image style={styles.cclogo} source={require('../img/CC_logo.png')}/>
                    <TouchableOpacity onPress={() => navigate('ExplorationRT')}><Image style={styles.help} source={require("../img/help.png")}/></TouchableOpacity>

                </View>
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
        );
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
        title:{
            position: 'absolute',
            width: 350,
            top: 480,
            left: 30,
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
        // pin:{
        //     width: 25,
        //     height: 25
        // },
        help:{
            width: 23,
            height: 23
        }
});
