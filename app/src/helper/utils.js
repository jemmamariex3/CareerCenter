/// this contains a helper method that determines the size of the iphone
import React from 'react';
import {Dimensions} from 'react-native'
const iPhoneSize = () =>{
    const windowWidth = Dimensions.get('window').width;
    return windowWidth //iphone6/7
}

export default iPhoneSize;