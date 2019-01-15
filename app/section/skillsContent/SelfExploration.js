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

export class SelfExploration extends Component {
    static navigationOptions = {
        header:null
    };
    render() {
        return (
            <SafeAreaView style={styles.mainContainer}>
                <ScrollView contentContainerStyle={styles.container}>
                {/*<View style={styles.oval}/>*/}
                <Image style={styles.seGraphics1} source={require('../../img/Exploration/Alvin_SE_illustration_vector_015-05.png')}/>
                <Text style={styles.titles}>Self-Exploration</Text>
                <View style={styles.textBox}>
                    <Text style={styles.detail}>The first step is you! Self-Exploration allows you to learn more about who you are and who you want to be. </Text>
                </View>
                <Image style={[styles.seGraphics2, styles.seGraphics]} source={require('../../img/Exploration/Alvin_SE_illustration_vector_012_C-03.png')}/>
                    <View style={styles.textBox}>
                        <Text style={styles.detail}>Knowing what you’re good at, what you’re interested in, and what is important to you will help to clarify different options and determine the right </Text>
                        <Text style={styles.detail}>ones for you.</Text>
                    </View>
                <Image style={[styles.seGraphics3, styles.seGraphics]} source={require('../../img/Exploration/Alvin_SE_illustration_vector_012_C-04.png')}/>
                    <View style={styles.textBox}>
                        <Text style={styles.detail}>Whether it’s through interactive activities on Pathways or introspective games provided by a counselor, we want to help each CSUN student on their own</Text>
                        <Text style={styles.detail}>unique path to success.</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: '#F48E29',
    },
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
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
        width: 336,
        height: 221,
    },
    seGraphics2:{
        width: 321,
        height: 258,
    },
    seGraphics3:{
        width: 279,
        height: 322,
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
