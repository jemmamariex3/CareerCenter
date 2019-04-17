/*
    --  Event.js is the file that contains the information for the selected event button.
    --  A modal should open when the event button is clicked on.
    --  This event component should be accepting props from the parent component, Events.js. Please take note that the parent is plural (app > views > Events.js)
    --  Jemma Tiongson January 23, 2019.

    --  Parent Events.js passes props (pulled from the database) to the Event.js modal.
    --  Events.js implements a ScrollView to display Title, Description, and Flyer preview.
    --  Vicente Figueroa April 16, 2019.

    TODO: Refactor css formats and finalize layout design
*/

import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native'


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
            <ScrollView style={styles.container}>
                <Text style={styles.title}>{this.state.name}</Text>
                <Text style={styles.info}>{this.state.desc}</Text>
                <View style={styles.imgContainer}>
                    <Image style={styles.imageDisplay} source={{uri: this.state.flyer }}/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        height: '100%',
        width: '100%',
    },
    imgContainer:{
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 600,
        paddingBottom: 30,
        height: '90%',
        width: '100%',
    },
    infoContainer:{
        height: '10%',
        alignItems: 'center'
    },
    imgHolder:{
        alignItems: "center",
        height: '100%',
        width: '100%',
        marginTop: 200,
    },
    imageDisplay:{
        width: '100%',
        height: '90%',
    },
    title:{
        marginTop: 24,
        fontWeight: 'bold',
        color:'rgba(208,13,45,1)',
        textTransform: 'uppercase',
        fontSize: 20,
        textAlign: 'center'
    },
    info:{
        textAlign: 'center',
        color: '#000000',
        fontWeight: 'bold'
    },
    subInfo:{
        fontSize: 12
    }
});
