import React, { Component } from 'react';

import {  Platform,  StyleSheet,  Text,  View} from 'react-native';

import { StackNavigator, NavigationAction } from 'react-navigation';

import RootStack from './src/config/router';




export default class App extends React.Component {

  render() {
  return (<RootStack/>);
  }

}
