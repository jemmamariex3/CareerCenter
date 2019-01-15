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
