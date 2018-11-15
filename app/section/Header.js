import React, {Component} from 'react';
import {Dimensions,StyleSheet, View,Image} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export class Header extends Component<Props> {
    render(){
        return(
            <View style={styles.headStyle}>
                <Image style={styles.header} source={require('../img/career_center_logo.png')}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({

    headStyle:{
        width:width,
        height:50,
        flexDirection: 'row',
        // backgroundColor:'rgba(222,228,242,.30)'
    },
    header:{
        width:'65%',
        height:'50%',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'auto',
        marginBottom:'auto',
    }
})
