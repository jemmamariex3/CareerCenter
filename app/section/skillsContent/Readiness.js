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
                    {/*<View style={styles.oval}/>*/}
                    <Image style={styles.seGraphics1} source={require('../../img/Readiness/Alvin_SE_illustration_vector_015-07.png')}/>
                    <Text style={styles.titles}>Readiness</Text>
                    <View style={styles.textBox}>
                        <Text style={styles.detail}>The 21st century is asking more of students than ever before, and so are employers! Do you know all the most commonly asked interview questions?</Text>
                        <Text style={styles.detail}>How would you rate your digital literacy? Have you researched the projected changes coming to your industry field?</Text>

                        <Text/>
                        <Text style={styles.detail}>Bridging the gap between college and workplace can be overwhelming, and in today’s world of a constantly evolving job market, soft skills are becoming more</Text>
                        <Text style={styles.detail}>vital than ever. Companies are constantly looking towards a shifting economic future that requires the latest skills, both hard and soft.</Text>
                        <Text/>
                        <Text/>
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
        zIndex: 2,
        fontSize: 36,
        color: '#ffffff',
    },
    detail:{
        fontSize: 18,
        color: '#FFFFFF',
    },
    textBox:{
        width: 331,
        height: 480,
        marginTop: 40,
    },

    seGraphics1:{
        width: 347,
        height: 198,
        marginTop: 60
    },
    oval:{
        width: 300,
        height: 280,
        backgroundColor: '#FFFFFF',
        borderRadius: 200,
        transform: [{ scaleX:2.5 }],
        top: 25
    }
});
