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
                    {/*<View style={styles.oval}/>*/}
                    <Image style={styles.seGraphics1} source={require('../../img/Counseling/Alvin_SE_illustration_vector_015-04.png')}/>
                    <Text style={styles.titles}>Counseling</Text>
                    <View style={styles.textBox}>
                        <Text style={styles.detail}>When you think of the Career Center, you probably think of our accomplished Career Counselors and skilled Peer Educators.</Text>
                        <Text/>
                        <Text style={styles.detail}>Think of both as caring and knowledgeable tour guides on your college journey, helping you learn more about yourself and the world of work, </Text>
                        <Text style={styles.detail}>choose an academic direction that’s right for your goals, and create a plan of action to point you towards success in school and your career. </Text>
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
        height: 95,
        marginTop: 40,

    },

    seGraphics1:{
        width: 341,
        height: 240,
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
