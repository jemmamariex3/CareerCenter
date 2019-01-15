import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native'


export class Help extends Component {
    static navigationOptions = {
        header:null
    };
    render() {
        return (
            <View>
                <Text style={styles.title}>HELP PAGE</Text>
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
