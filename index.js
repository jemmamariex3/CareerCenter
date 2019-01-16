/** @format */

// Index.js renders the App.js file. This is the entry point for both iOS and Android 1/15/19 JT

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
