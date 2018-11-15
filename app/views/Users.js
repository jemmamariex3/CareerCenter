import React, {Component} from 'react';
import {TouchableOpacity,StatusBar,Platform, StyleSheet, Text, SafeAreaView,View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {MainLogo} from "../img/career_center_logo.png";
import {Header} from "../section/Header";

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
                <StatusBar barStyle = "dark-content" hidden = {false}/>
                <TouchableOpacity onPress={() => navigate('ExplorationRT')}>
                    <View style={[styles.button,{borderColor: '#f6ba61',backgroundColor: '#fefbf5',shadowColor: '#F6BA61',}]}>
                        <Image style={styles.cc_logo} source={require('../img/Self-Exploration.png')}/>
                        <View style={styles.text_box}>
                            <Text style={[styles.textLabel,{color:'#F6BA61'}]}>
                                Self-Exploration
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('CounselingRT')}>
                    <View style={[styles.button,{borderColor: '#e84c3d',backgroundColor: '#fdf5f4',shadowColor: "#E84C3D",}]}>
                        <Image style={styles.cc_logo} source={require('../img/Counseling.png')}/>
                        <View style={styles.text_box}>
                            <Text style={[styles.textLabel,{color:'#E84C3D'}]}>
                                Counseling
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('ResourcesRT')}>
                    <View style={[styles.button,{borderColor: '#8297CA',backgroundColor: '#f8f9fc',shadowColor: "#8297CA",}]}>
                        <Image style={styles.cc_logo} source={require('../img/CareerResources.png')}/>
                        <View style={styles.text_box}>
                            <Text style={[styles.textLabel,{color:'#8297CA'}]}>
                                Resources
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('ConnectionsRT')}>
                    <View style={[styles.button,{borderColor: '#36a3db',backgroundColor: '#f3fafd',shadowColor: "#36a3db",}]}>
                        <Image style={styles.cc_logo} source={require('../img/Workplace_Connections.png')}/>
                        <View style={styles.text_box}>
                            <Text style={[styles.textLabel,{color:'#36A3DB'}]}>
                                Connections
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('ReadinessRT')}>
                    <View style={[styles.button,{borderColor: '#5b4d90',backgroundColor: '#f6f5f9',shadowColor: "#5b4d90",}]}>
                        <Image style={styles.cc_logo} source={require('../img/Workplace_Readiness.png')}/>
                        <View style={styles.text_box}>
                            <Text style={[styles.textLabel,{color:'#5B4D90'}]}>
                                Readiness
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('DirectionsRT')}>
                    <View style={[styles.button,{borderColor: '#84cdc9',backgroundColor: '#f8fcfc',shadowColor: "#84cdc9",}]}>
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
            shadowOpacity: 0.3,
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
        animateButton:{

        }
});
