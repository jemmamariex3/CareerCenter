// As of right now, Events.js contains the template of how the rendered events from the database will look like
// Please update this documentation section once more logic is added into this file.
// {initialArr.map((prop, key) => { } line 57 is the template that maps through initialArr  (an array of objects that contain the properties needed for the buttons)
// JT 1/15/19

import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Text, View, ScrollView, Image,TouchableOpacity, Button} from 'react-native';


// import {TabMenu} from "../section/TabMenu";
const initialArr = [
    {
        name: "Resu-Makeover",
        date: "Oct",
        num: "10",
        time: "10:30 AM - 2:30 PM",
        desc: "USU Grand Salon",
        img: "https://busecon.csun.edu/sites/default/files/Resu-MakeOver_Flyer_Website.png",
        flyer: "https://busecon.csun.edu/sites/default/files/Resu-MakeOver_Flyer_Website.png",
    },
    {
        name: "Resu-Makeover",
        date: "Oct",
        num: "10",
        time: "10:30 AM - 2:30 PM",
        desc: "USU Grand Salon",
        img: "https://busecon.csun.edu/sites/default/files/Resu-MakeOver_Flyer_Website.png",
        flyer: "https://busecon.csun.edu/sites/default/files/Resu-MakeOver_Flyer_Website.png",
    },
    {
        name: "Resu-Makeover",
        date: "Oct",
        num: "10",
        time: "10:30 AM - 2:30 PM",
        desc: "USU Grand Salon",
        img: "https://busecon.csun.edu/sites/default/files/Resu-MakeOver_Flyer_Website.png",
        flyer: "https://busecon.csun.edu/sites/default/files/Resu-MakeOver_Flyer_Website.png",
    },

];


//TODO: render the data from the database and store into the initialArr
//TODO: enable sharing button
//TODO: add permissions to add events to user's calendar (if possible - not a priority)
//TODO: Update the documentation for this file.



export class Events extends Component<Props> {
    static navigationOptions = {
        header: null
    };
    render(){
        const { navigate } = this.props.navigation;

        return(
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.description}>

                    {initialArr.map((prop, key) => {
                        return (
                            <TouchableOpacity onPress={() => navigate('EventRT')}>
                                <View style={styles.textBox}>
                                    <View style={styles.imgHolder}>
                                        <Image style={styles.imageDisplay} source={{uri: prop.img }}/>
                                    </View>
                                    <View style={styles.infoHolder}>
                                        <View style={styles.date}>
                                            <Text style={styles.dateMon}>{prop.date}</Text>
                                            <Text style={styles.dateNum}>{prop.num}</Text>
                                        </View>
                                        <View style={styles.eventInfo}>
                                            <View style={styles.infoBox}>
                                                <Text style={styles.eventTitle}>{prop.name}</Text>
                                            </View>
                                            <View style={styles.infoBox}>
                                                <Text style={styles.eventDescription}>
                                                    {prop.desc}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={styles.shareIcon}>
                                            <Image style={styles.share} source={require('../img/share.png')}/>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
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
        height:200,
    },
    imageDisplay:{
        width: 300,
        height:160,
        borderRadius:20

    }
})
