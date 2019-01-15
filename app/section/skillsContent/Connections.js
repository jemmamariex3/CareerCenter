import React, {Component} from 'react';
import {Text, SafeAreaView,Button, TouchableOpacity, Image, StyleSheet,ScrollView, View, Dimensions} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

const {width, height} = Dimensions.get('window')
export class Connections extends Component {
    static navigationOptions = {
        header:null
    };
    render() {
        return (
            <SafeAreaView style={styles.mainContainer}>
                <ScrollView contentContainerStyle={styles.container}>
                    {/*<View style={styles.oval}/>*/}
                    <Image style={styles.seGraphics1} source={require('../../img/Connections/Alvin_SE_illustration_vector_015-08.png')}/>
                    <Text style={styles.titles}>Connections</Text>
                    <View style={styles.textBox}>
                        <Text style={styles.detail}>There’s no substitute for experience, and the Career Center aims to provide as many real-world connections to employers as possible. SUNLink lists</Text>
                        <Text style={styles.detail}>jobs and internship opportunities from companies looking specifically for CSUN students while Pathways can help you explore a variety of experiential</Text>
                        <Text style={styles.detail}>opportunities!</Text>
                        <Text/>
                        <Text style={styles.detail}>With events like 60 Seconds to Success, job fairs and informational interviews, students can use their time at CSUN to adequately prepare for the working</Text>
                        <Text style={styles.detail}>world.</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: '#2EA4DC',
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
        height: 400,
        marginTop: 40,
    },

    seGraphics1:{
        width: 348,
        height: 237,
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
