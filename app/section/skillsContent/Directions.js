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
                    {/*<View style={styles.oval}/>*/}
                    <Image style={styles.seGraphics1} source={require('../../img/Direction/Alvin_SE_illustration_vector_015-09.png')}/>
                    <Text style={styles.titles}>Connections</Text>
                    <View style={styles.textBox}>
                        <Text style={styles.detail}>The Career Center wants to help each CSUN student succeed in their chosen fields, but the path to success is not always a straight one. Checking in with</Text>
                        <Text style={styles.detail}>yourself, reevaluating your goals and meeting with knowledgeable Career Center staff can help ensure you stay on course to achieve your dreams.</Text>

                        <Text/>
                        <Text style={styles.detail}>It’s not always about the big picture decisions like choosing your major. Sometimes one class or piece of knowledge can be enough to propel</Text>
                        <Text style={styles.detail}>you to new heights. There is a lot the Career Center has to offer, and we want you to feel comfortable taking advantage of all the resources we have available.</Text>
                        <Text/>
                        <Text style={styles.detail}>Remember, it’s not each piece, but the larger chain of choices that connects everything together and leads you to success.</Text>
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
        zIndex: 2,
        fontSize: 36,
        color: '#ffffff',
    },
    detail:{
        fontSize: 18,
        color: '#FFFFFF',
    },
    textBox:{
        width: 332,
        height: 520,
        marginTop: 40,
    },

    seGraphics1:{
        width: 333,
        height: 231,
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
