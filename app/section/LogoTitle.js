// This file contains the white career center logo. I set it as a section component so that it is reusable for other pages in the app. JT 1/15/19

import React, {Component} from 'react';
import {Image} from 'react-native';

export class LogoTitle extends React.Component {
    render() {
        return (
            <Image
                source={require('../img/cc_logo_white.png')}
            />
        );
    }
}
