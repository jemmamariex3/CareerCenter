/// this contains a helper method that determines the size of the iphone
import React from 'react';
import {Dimensions} from 'react-native'
const iPhoneSize = () =>{
    const windowWidth = Dimensions.get('window').width;
    if(windowWidth === 320){
        return 'small'; //iPhone SE
    }else if(windowWidth === 414){
        return 'large';// iphone plus
    }
    return 'medium' //iphone6/7
}

export default iPhoneSize;