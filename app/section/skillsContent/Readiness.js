import React, {Component} from 'react';
import {Text, SafeAreaView,Button, TouchableOpacity, Image, StyleSheet,ScrollView, View, Dimensions} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

const {width, height} = Dimensions.get('window')
export class Readiness extends Component {
    static navigationOptions = {
        header:null
    };
    render() {
        return (
            <SafeAreaView style={styles.mainContainer}>
                <ScrollView contentContainerStyle={styles.container}>
                    <View style={styles.oval}/>
                    <Image style={styles.seGraphics1} source={require('../../img/Readiness/Alvin_SE_illustration_vector_015-07.png')}/>
                    <Text style={styles.titles}>Readiness</Text>
                    <View style={styles.textBox}>
                        <Text style={styles.detail}>The 21st century is asking more of students than ever before, and so are employers!</Text>
                        <Text style={styles.detail}>Do you know all the most commonly asked interview questions? How would you rate your digital literacy? Have you researched the projected changes coming to your industry field?</Text>
                    </View>
                    <View style={styles.oval2}/>
                    <Image style={styles.seGraphics2} source={require('../../img/Readiness/Alvin_SE_illustration_vector_015-07.png')}/>
                    <View style={styles.textBox2}>
                        <Text style={styles.detail2}>Bridging the gap between college and workplace can be overwhelming, and in today’s world of a constantly evolving job market, soft skills are becoming more vital than ever.</Text>
                        <Text>Companies are constantly looking towards a shifting economic future that requires the latest skills, both hard and soft.</Text>
                    </View>
                    <View style={styles.oval3}/>
                    <Image style={styles.seGraphics3} source={require('../../img/Readiness/Alvin_SE_illustration_vector_015-07.png')}/>
                    <View style={styles.textBox3}>
                        <Text style={styles.detail3}>That’s why the CSUN Career Center wants to make sure you’re as prepared as possible for any situation! From learning about emotional intelligence so you can excel in any environment with your communication and teamwork to acquiring the necessary training to really shine in the workplace, we want every Matador to feel confident in their career potential.</Text>
                    </View>


                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: '#5C4C92',
        width: width,
        height: height,
    },
    container:{
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',

    },
    titles:{
        color:'#5C4C92',
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
        height: 250,
        marginTop: 20,
        marginBottom: -20,
    },
    textBox2:{
        width: 331,
        height: 200,
    },
    textBox3:{
        width: 331,
        height: 300,
        marginTop: 40,
    },
    seGraphics1:{
        width: 347,
        height: 198,
        marginTop: 60
    },
    seGraphics2:{
        width: 347,
        height: 198,
    },
    seGraphics3:{
        width: 347,
        height: 198,
        marginTop: 60
    },
    oval:{
        width: 250,
        height: 280,
        backgroundColor: '#FFFFFF',
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
        backgroundColor: '#FFFFFF',
        borderRadius: 300,
        transform: [
            {scaleX: 3}
        ],
        top: 650,
        position: 'absolute'
    },
    oval3:{
        width: 250,
        height: 280,
        backgroundColor: '#FFFFFF',
        borderRadius: 300,
        transform: [
            {scaleX: 3}
        ],
        top: 1120,
        position: 'absolute'
    }
});
