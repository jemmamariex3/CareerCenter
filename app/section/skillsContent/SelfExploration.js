//The linear Gradients are using a library called react-native-linear-gradient JT 3/1/19

import React, {Component} from 'react';
import {
    Text,
    SafeAreaView,
    Button,
    TouchableOpacity,
    Image,
    StyleSheet,
    ScrollView,
    View,
    Dimensions
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient';

export class SelfExploration extends Component {
    static navigationOptions = {
        header:null
    };
    render() {
        return (
            <SafeAreaView>
                <LinearGradient colors={['#F48E29', '#FCC74D']}>
                    <ScrollView contentContainerStyle={styles.container}>
                    <View style={styles.oval}/>
                    <Image style={styles.seGraphics1} source={require('../../img/Exploration/Alvin_SE_illustration_vector_015-05.png')}/>
                    <Text style={styles.titles}>Self-Exploration</Text>
                    <View style={styles.textBox}>
                        <Text style={styles.detail}>The first step is you! Self-Exploration allows you to learn more about who you are and who you want to be. </Text>
                    </View>
                    <View style={styles.oval2}/>
                    <Image style={[styles.seGraphics2, styles.seGraphics]} source={require('../../img/Exploration/Alvin_SE_illustration_vector_012_C-03.png')}/>
                    <View style={styles.textBox2}>
                        <Text style={styles.detail2}>Knowing what you’re good at, what you’re interested in, and what is important to you will help to clarify different options and determine the right ones for you.</Text>
                    </View>
                    <View style={styles.oval3}/>

                    <Image style={[styles.seGraphics3, styles.seGraphics]} source={require('../../img/Exploration/Alvin_SE_illustration_vector_012_C-04.png')}/>
                    <View style={styles.textBox3}>
                        <Text style={styles.detail3}>Whether it’s through interactive activities on Pathways or introspective games provided by a counselor, we want to help each CSUN student on their own unique path to success.</Text>
                    </View>
                    </ScrollView>
                </LinearGradient>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
    },
    titles:{
        color:'#F8BD58',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize:24,
        textAlign: 'center'
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
        height: 200,
        marginTop: 40,
    },

    seGraphics1:{
        width: 336,
        height: 221,
        marginTop: 40
    },
    seGraphics2:{
        width: 321,
        height: 258,
        marginTop: 20
    },
    seGraphics3:{
        width: 279,
        height: 322,
        marginTop: 35
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
