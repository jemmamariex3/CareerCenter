//Event.js is the file that contains the information for the selected event button. A modal should open when the event button is clicked on.
// This event component should be accepting props from the parent component, Events.js. Please take note that the parent is plural (app > views > Events.js)
// .. sorry.
// 1/23/19 JT

import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'


export class Event extends Component {
    static navigationOptions = {
        header:null
    };
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            desc: this.props.desc,
            startDate: this.props.startDate,
            endDate: this.props.endDate,
            startTime: this.props.startTime,
            endTime: this.props.endTime,
            time: this.props.time,
            location: this.props.location,
            flyer: this.props.flyer,
            rsvp: this.props.rsvp
        }
    }
    render() {
        return (
            <View>
                <Text style={styles.title}>{this.state.name}</Text>
                <Text style={styles.info}>{this.state.desc}</Text>
                <View style={styles.imgHolder}>
                    <Image style={styles.imageDisplay} source={{uri: this.state.flyer }}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imgContainer:{
        width: 500,
        height: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ffffff",

    },
    imgHolder:{
        alignItems: "center",
        height: '90%',
        width: '100%',
        marginTop: 20,
        padding: 20
    },
    imageDisplay:{
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    spacer:{
        // marginBottom: 20
    },
    title:{
        fontWeight: 'bold',
        color:'#5b4d90',
        textTransform: 'uppercase',
        fontSize:14,
        textAlign: 'center'
    },
    info:{
        textAlign: 'center',
        color: '#E84C37',
        fontWeight: 'bold'
    },
    subInfo:{
        fontSize: 12
    }
});
