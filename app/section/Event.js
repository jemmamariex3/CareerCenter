//Event.js is the file that contains the information for the selected event button. A modal should open when the event button is clicked on.
// This event component should be accepting props from the parent component, Events.js. Please take note that the parent is plural (app > views > Events.js)
// .. sorry.
// 1/23/19 JT

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native'


export class Event extends Component {
    static navigationOptions = {
        header:null
    };
    constructor(props){
        super(props);
        this.state = {
            name: '',
            desc: '',
            date: '',
            num: '',
            time: '',
            location: '',
            img: '',
            flyer: '',
            rsvp: ''
        }
    }
    render() {
        return (
            <View>
                <Text style={styles.title}>Event Modal</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    spacer:{
        marginBottom: 20
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
