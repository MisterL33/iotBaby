import React from 'react';
import { StackNavigator,  NavigationAction } from 'react-navigation';
import {View, Text, Button, TouchableOpacity, TouchableHighlight } from 'react-native';

import Home from '../screens/home';
import BabyList from '../screens/babyList';
import Register from '../screens/register';
import Login from '../screens/login';
import Message from '../screens/message';
import Team from '../screens/team';



const RootStack = StackNavigator(

    {
        Home: {
            screen: Home,
         
        },
        BabyList: {
            screen: BabyList,
        },
        Register: {
            screen: Register,
        },
        Login: {
            screen: Login,
        },
        Message: {
            screen: Message,
        },
        Team: {
            screen: Team,
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