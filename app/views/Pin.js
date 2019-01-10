import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native'


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
                <Text style={[styles.info, styles.subInfo]}>*Please call us for further information about our hours.*</Text>
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
