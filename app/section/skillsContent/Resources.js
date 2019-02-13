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
                    {/*<View style={styles.oval}/>*/}
                    <Image style={styles.seGraphics1} source={require('../../img/Resources/Alvin_SE_illustration_vector_015-06.png')}/>
                    <Text style={styles.titles}>Resources</Text>
                    <View style={styles.textBox}>
                        <Text style={styles.detail}>Whether it’s through counseling or your own research, the Career Center is full of helpful resources both on-campus and online! Come to Bayramian Hall 413 to </Text>
                        <Text style={styles.detail}>see all the amazing career-focused books in our library.</Text>
                        <Text/>
                        <Text style={styles.detail}>Explore Pathways and SUNlink, our two unique online services. Take part in an Information Session to learn about particular jobs or companies. We have </Text>
                        <Text style={styles.detail}>the tools to help you succeed! </Text>
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
        height: 380,
        marginTop: 40,
    },

    seGraphics1:{
        width: 293,
        height: 244,
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
