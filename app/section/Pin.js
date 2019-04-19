//Pin.js is the file that contains the information that goes into the modal that opens when the pin button is clicked on.
// 1/15/19 JT

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import iPhoneSize from '../src/helper/utils.js'


const size = iPhoneSize();
let titleSize = 14;
let infoSize = 12;
if(size >= 320 && size <= 350){
    titleSize = 12;
    infoSize = 11;
}

export class Pin extends Component {
    static navigationOptions = {
        header:null
    };
    render() {
        return (
            <View>
                <Text style={styles.title}>Location</Text>
                <Text style={styles.info}>Bayramian Hall 413</Text>
                <Text style={styles.info}>18111 Nordhoff St. </Text>
                <Text style={styles.info}>Northridge, CA 91330-8241</Text>
                <Text style={styles.info}>Telephone: (818) 677-287</Text>

                <View style={styles.spacer}/>

                <Text style={styles.title}>Hours</Text>
                <Text style={styles.info}>Monday-Thursday</Text>
                <Text style={styles.info}>9:00 am - 5:00 pm</Text>
                <Text style={styles.info}>Friday:</Text>
                <Text style={styles.info}>9:00 am - 4:00 pm</Text>

                <View style={styles.spacer}/>

                <Text style={styles.title}>Closed</Text>
                <Text style={styles.info}>Nov 12th</Text>
                <Text style={styles.info}>Campus Closed</Text>

                <View style={styles.spacer}/>

                <Text style={styles.info}>Nov 14th</Text>
                <Text style={styles.info}>PLCSE</Text>

                <View style={styles.spacer}/>
                <Text style={styles.info}>Nov 14th</Text>
                <Text style={styles.info}>Thanksgiving</Text>

                <View style={styles.spacer}/>
                <Text style={styles.title}>Fall Drop-Ins</Text>
                <Text style={styles.info}>Monday - Thursday:</Text>
                <Text style={styles.info}>1:00pm - 3:45pm</Text>
                <Text style={styles.info}>Friday:</Text>
                <Text style={styles.info}>9:00am - 10:45am</Text>

                <View style={styles.spacer}/>
                <Text style={styles.info}>*Please call us for further information about our hours.*</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pin:{
        width: 25,
        height: 25
    },
    spacer:{
        marginBottom: 20
    },
    title:{
        fontWeight: 'bold',
        color:'#5b4d90',
        textTransform: 'uppercase',
        fontSize:titleSize,
        textAlign: 'center'
    },
    info:{
        textAlign: 'center',
        color: '#E84C37',
        fontWeight: 'bold',
        fontSize: infoSize,
        flexWrap: 'wrap'
    },
});
