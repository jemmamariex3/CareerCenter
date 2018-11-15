import React, {Component} from 'react';
import {Text,StyleSheet} from 'react-native'

export class Home extends Component {
    static navigationOptions = {
        header:null
    };
    render() {
        return (
            <Text style={styles.home}> Home</Text>
        );
    }
}
const styles = StyleSheet.create({
    home:{
        marginTop: 300,
        textAlign:'center'
    }
});
