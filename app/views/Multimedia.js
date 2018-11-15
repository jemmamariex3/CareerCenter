import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Text, View, ScrollView, Image} from 'react-native';
import {createStackNavigator} from 'react-navigation'
import {Header} from "../section/Header";
import Icon from 'react-native-vector-icons/FontAwesome';

// import {TabMenu} from "../section/TabMenu";

export class Multimedia extends Component<Props> {
    static navigationOptions = {
        header: null
    };
    render(){
        const { navigate } = this.props.navigation;

        return(
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.description}>
                    <View style={styles.textBox}>
                        <View style={styles.imgHolder}>
                            <Icon name="play-circle-o" size={50} color={'#ffffff'} style={styles.play}/>
                        </View>
                        <View style={styles.infoHolder}>
                            <View style={styles.eventInfo}>
                                <View style={styles.infoBox}>
                                    <Text style={styles.eventTitle}>Looking for a Job?</Text>
                                </View>
                                <View style={styles.infoBox}>
                                    <Text style={styles.eventDescription}>
                                        RSVP via Sunlink for workshop
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.shareIcon}>
                                <Image style={styles.share} source={require('../img/share.png')}/>
                            </View>
                        </View>
                    </View>
                    <View style={styles.textBox}>
                        <View style={styles.imgHolder}>
                            <Icon name="play-circle-o" size={50} color={'#ffffff'} style={styles.play}/>
                        </View>
                        <View style={styles.infoHolder}>
                            <View style={styles.eventInfo}>
                                <View style={styles.infoBox}>
                                    <Text style={styles.eventTitle}>Looking for a Job?</Text>
                                </View>
                                <View style={styles.infoBox}>
                                    <Text style={styles.eventDescription}>
                                        RSVP via Sunlink for workshop
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.shareIcon}>
                                <Image style={styles.share} source={require('../img/share.png')}/>
                            </View>
                        </View>
                    </View>
                    <View style={styles.textBox}>
                        <View style={styles.imgHolder}>
                            <Icon name="play-circle-o" size={50} color={'#ffffff'} style={styles.play}/>
                        </View>
                        <View style={styles.infoHolder}>
                            <View style={styles.eventInfo}>
                                <View style={styles.infoBox}>
                                    <Text style={styles.eventTitle}>Looking for a Job?</Text>
                                </View>
                                <View style={styles.infoBox}>
                                    <Text style={styles.eventDescription}>
                                        RSVP via Sunlink for workshop
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.shareIcon}>
                                <Image style={styles.share} source={require('../img/share.png')}/>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        position: 'relative',
        backgroundColor:'rgba(222,228,242,.30)'

    },
    description:{
        width: 400,
        height: 550,
        backgroundColor:'rgba(222,228,242,.30)'

    },
    date:{
        top: 165,
        justifyContent:'center',
        alignItems:'center',
    },
    dateMonth:{
        fontSize: 14
    },
    dateNum:{
        fontSize: 20

    },
    eventTitle:{
        fontSize: 20
    },
    eventInfo:{
        top: 165,

    },
    shareIcon:{
        top: 165,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        width: 40,
        height: 40,
    },
    share:{
        justifyContent:'center',
        width: '70%',
        height: '70%',
    },
    textBox:{
        width: 300,
        height:235,
        margin: 10,
        left: 30,
        borderRadius:20,
        backgroundColor: '#ffffff',
        shadowOpacity: 0.05,
        shadowRadius: 1,
        shadowOffset: {
            height: 6,
            width: 6
        },

    },
    infoHolder:{
        flexDirection:'row',
        justifyContent: 'space-around'
    },
    infoBox:{
        width: 180,
    },
    imgHolder:{
        position:'absolute',
        width: 300,
        height:160,
        borderRadius:20,
        backgroundColor: '#d9d9d9'
    },
    play:{
        position: 'absolute',
        left: '43%',
        top: '35%'
    }
})
