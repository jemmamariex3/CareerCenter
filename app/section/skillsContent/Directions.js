import React, {Component} from 'react';
import {Text, SafeAreaView,Button, TouchableOpacity, Image, StyleSheet,ScrollView, View, Dimensions} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

const {width, height} = Dimensions.get('window')
export class Directions extends Component {
    static navigationOptions = {
        header:null
    };
    render() {
        return (
            <SafeAreaView style={styles.mainContainer}>
                <ScrollView contentContainerStyle={styles.container}>
                    <View style={styles.oval}/>
                    <Image style={styles.seGraphics1} source={require('../../img/Direction/Alvin_SE_illustration_vector_015-09.png')}/>
                    <Text style={styles.titles}>Connections</Text>
                    <View style={styles.textBox}>
                        <Text style={styles.detail}>The Career Center wants to help each CSUN student succeed in their chosen fields, but the path to success is not always a straight one.</Text>
                    </View>
                    <View style={styles.oval2}/>
                    <Image style={styles.seGraphics2} source={require('../../img/Direction/Alvin_SE_illustration_vector_015-09.png')}/>
                    <View style={styles.textBox2}>
                        <Text style={styles.detail2}>Checking in with yourself, reevaluating your goals and meeting with knowledgeable Career Center staff can help ensure you stay on course to achieve your dreams.</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: '#82CFCA',

    },
    container:{
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',

    },
    titles:{
        color:'#82CFCA',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize:24,
        textAlign: 'center',
        marginTop: -10
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
    textBox:{
        width: 331,
        height: 150,
        marginTop: 20,
        marginBottom: -20,
    },
    textBox2:{
        width: 331,
        height: 250,
    },
    seGraphics1:{
        width: 333,
        height: 231,
        marginTop: 40
    },
    seGraphics2:{
        width: 333,
        height: 231,
        marginTop: 20
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
        top: 600,
        position: 'absolute'
    },
});
