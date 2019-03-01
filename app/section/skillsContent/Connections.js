import React, {Component} from 'react';
import {Text, SafeAreaView,Button, TouchableOpacity, Image, StyleSheet,ScrollView, View, Dimensions} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import LinearGradient from "react-native-linear-gradient";

const {width, height} = Dimensions.get('window')
export class Connections extends Component {
    static navigationOptions = {
        header:null
    };
    render() {
        return (
            <SafeAreaView style={styles.mainContainer}>
                <LinearGradient colors={['#2EA4DC', '#70DAF4']}>
                    <ScrollView contentContainerStyle={styles.container}>
                        <View style={styles.oval}/>
                        <Image style={styles.seGraphics1} source={require('../../img/Connections/Alvin_SE_illustration_vector_015-08.png')}/>
                        <Text style={styles.titles}>Connections</Text>
                        <View style={styles.textBox}>
                            <Text style={styles.detail}>There’s no substitute for experience, and the Career Center aims to provide as many real-world connections to employers as possible.</Text>
                        </View>
                        <View style={styles.oval2}/>
                        <Image style={styles.seGraphics2} source={require('../../img/Connections/Alvin_SE_illustration_vector_015-08.png')}/>
                        <View style={styles.textBox2}>
                            <Text style={styles.detail2}>SUNLink lists jobs and internship opportunities from companies looking specifically for CSUN students while Pathways can help you explore a variety of experiential opportunities!</Text>
                        </View>
                        <View style={styles.oval3}/>
                        <Image style={styles.seGraphics3} source={require('../../img/Connections/Alvin_SE_illustration_vector_015-08.png')}/>
                        <View style={styles.textBox3}>
                            <Text style={styles.detail3}>With events like 60 Seconds to Success, job fairs and informational interviews, students can use their time at CSUN to adequately prepare for the working world.</Text>
                        </View>
                    </ScrollView>
                </LinearGradient>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer:{
        width: width,
        height: height,
    },
    container:{
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',

    },
    titles:{
        color:'#2EA4DC',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize:24,
        textAlign: 'center',
        marginTop: -12

    },
    detail:{
        color: '#ffffff',
        fontSize:14,
        marginTop: 40,
    },
    detail2:{
        color: '#000000',
        fontSize:14,
        marginTop: 20,
    },
    detail3:{
        color: '#000000',
        fontSize:14,
        marginTop: -20,

    },
    textBox:{
        width: 331,
        height: 120,
        marginTop: 20,
        marginBottom: -20,
    },
    textBox2:{
        width: 331,
        height: 120,
        marginTop: 20,
    },
    textBox3:{
        width: 331,
        height: 260,
        marginTop: 60,
    },

    seGraphics1:{
        width: 348,
        height: 237,
        marginTop: 35
    },
    seGraphics2:{
        width: 348,
        height: 237,
        marginTop: 40
    },
    seGraphics3:{
        width: 348,
        height: 237,
        marginTop: 80
    },
    oval:{
        width: 250,
        height: 280,
        backgroundColor: '#F2FBFF',
        borderRadius: 300,
        transform: [
            {scaleX: 3}
        ],
        top: 20,
        position: 'absolute'
    },
    oval2:{
        width: 250,
        height: 280,
        backgroundColor: '#F2FBFF',
        borderRadius: 300,
        transform: [
            {scaleX: 3}
        ],
        top: 600,
        position: 'absolute'
    },
    oval3:{
        width: 250,
        height: 280,
        backgroundColor: '#F2FBFF',
        borderRadius: 300,
        transform: [
            {scaleX: 3}
        ],
        top: 1060,
        position: 'absolute'
    }
});
