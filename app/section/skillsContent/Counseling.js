import React, {Component} from 'react';
import {Text, SafeAreaView,Button, TouchableOpacity, Image, StyleSheet,ScrollView, View, Dimensions} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

const {width, height} = Dimensions.get('window')
export class Counseling extends Component {
    static navigationOptions = {
        header:null
    };
    render() {
        return (
            <SafeAreaView style={styles.mainContainer}>
                <ScrollView contentContainerStyle={styles.container}>
                    <View style={styles.oval}/>
                    <Image style={styles.seGraphics1} source={require('../../img/Counseling/Alvin_SE_illustration_vector_015-04.png')}/>
                    <Text style={styles.titles}>Counseling</Text>
                    <View style={styles.textBox}>
                        <Text style={styles.detail}>When you think of the Career Center, you probably think of our accomplished Career Counselors and skilled Peer Educators.</Text>
                    </View>
                    <View style={styles.oval2}/>
                    <Image style={styles.seGraphics1} source={require('../../img/Counseling/Alvin_SE_illustration_vector_015-04.png')}/>
                    <View style={styles.textBox2}>
                        <Text style={styles.detail2}>Think of both as caring and knowledgeable tour guides on your college journey, helping you learn more about yourself and the world of work, choose an academic direction that’s right for your goals, and create a plan of action to point you towards success in school and your career. </Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: '#E84C37',
        width: width,
        height: height,
    },
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
    },
    titles:{
        color:'#E84C37',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize:24,
        textAlign: 'center',
        marginTop: -35
    },
    detail:{
        fontSize: 14,
        color: '#FFFFFF',
    },
    detail2:{
        color: '#000000',
        fontSize:14,
        marginTop: 20,
    },
    textBox:{
        width: 331,
        height: 80,
        marginTop: 50,

    },
    textBox2:{
        width: 331,
        height: 300,
        marginTop: -15,

    },

    seGraphics1:{
        width: 341,
        height: 240,
        margin: 30
    },
    oval:{
        width: 250,
        height: 280,
        backgroundColor: '#FFF8F7',
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
        backgroundColor: '#FFF8F7',
        borderRadius: 300,
        transform: [
            {scaleX: 3}
        ],
        top: 630,
        position: 'absolute'
    }
});
