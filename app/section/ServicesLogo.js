// This file contains the services logo for the help modal. JT 1/25/19

import React, {Component} from 'react';
import {Image} from 'react-native';

export class ServicesTitle extends React.Component {
    render() {
        return (
            <Image
                source={require('../img/cc_logo_white.png')}
            />
        );
    }
}
