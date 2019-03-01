import React, {Component} from 'react';
import {Text, SafeAreaView,Button, TouchableOpacity, Image, StyleSheet,ScrollView, View, Dimensions} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

const {width, height} = Dimensions.get('window')
export class Resources extends Component {
    static navigationOptions = {
        header:null
    };
    render() {
        return (
            <SafeAreaView style={styles.mainContainer}>
                <ScrollView contentContainerStyle={styles.container}>
                    <View style={styles.oval}/>
                    <Image style={styles.seGraphics1} source={require('../../img/Resources/Alvin_SE_illustration_vector_015-06.png')}/>
                    <Text style={styles.titles}>Resources</Text>
                    <View style={styles.textBox}>
                        <Text style={styles.detail}>Whether it’s through counseling or your own research, the Career Center is full of helpful resources both on-campus and online!</Text>
                    </View>
                    <View style={styles.oval2}/>
                    <Image style={styles.seGraphics2} source={require('../../img/Resources/Alvin_SE_illustration_vector_015-06.png')}/>
                    <View style={styles.textBox2}>
                        <Text style={styles.detail2}>Come to Bayramian Hall 413 to see all the amazing career-focused books in our library.</Text>
                    </View>
                    <View style={styles.oval3}/>
                    <Image style={styles.seGraphics3} source={require('../../img/Resources/Alvin_SE_illustration_vector_015-06.png')}/>
                    <View style={styles.textBox3}>
                        <Text style={styles.detail3}>Explore Pathways and SUNlink, our two unique online services. Take part in an Information Session to learn about particular jobs or companies. We have the tools to help you succeed! </Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: '#6078DD',
        width: width,
        height: height,
    },
    container:{
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
    },
    titles:{
        color:'#6078DD',
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
    },
    textBox3:{
        width: 331,
        height: 240,
        marginTop: 50,
    },

    seGraphics1:{
        width: 293,
        height: 244,
        marginTop: 30
    },
    seGraphics2:{
        width: 293,
        height: 244,
        marginTop: 30
    },
    seGraphics3:{
        width: 293,
        height: 244,
        marginTop: 120
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
        backgroundColor: '#fff5e8',
        borderRadius: 300,
        transform: [
            {scaleX: 3}
        ],
        top: 580,
        position: 'absolute'
    },
    oval3:{
        width: 250,
        height: 280,
        backgroundColor: '#fff5e8',
        borderRadius: 300,
        transform: [
            {scaleX: 3}
        ],
        top: 1080,
        position: 'absolute'
    }
});
