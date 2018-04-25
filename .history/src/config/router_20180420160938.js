import React from 'react';
import { StackNavigator,  NavigationAction } from 'react-navigation';
import {View, Text, Button, TouchableOpacity, TouchableHighlight } from 'react-native';

import Home from '../screens/home';
import BabyList from '../screens/babyList';
const RootStack = StackNavigator(

    {
        Home: {
            screen: Home,
         
        },
        BabyList: {
            screen: BabyList,
        },
        Register: {
            screen: BabyList,
        }


    },
    {
        initialRouteName: 'Home',
    }


);
export default class Stack extends React.Component {
    render() {

        return <RootStack />
    }
}