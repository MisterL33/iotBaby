
import React from 'react';
import { Modal, Platform, TouchableOpacity, StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Picker, AsyncStorage } from 'react-native';

import baseIp from '../config/ipconfig'
import { isSignedIn, onSignOut, getUser, updateJwt } from '../tools/tokenManager';
window.navigator.userAgent = 'react-native';
export default class Login extends React.Component {



    constructor(props) {
        super(props);

        this.state = {
            email: 'lolo@gmail.com',
            password: 'pomme974974',
            myKey: null,
        };

    }




    


    render() {


        return (
            <View>
                <Text>Login</Text>
                <Button title='Accueil' onPress={() => this.props.navigation.navigate('Home')} />
                <View>
                    <TextInput value={this.state.email} onChangeText={(email) => this.setState({ email: email })} placeholder="Email" />
                    <TextInput value={this.state.password} onChangeText={(password) => this.setState({ password: password })} placeholder="Password" />
                    <Button title='OK' onPress={() => updateJwt()} />

                </View>
            </View>
        );
    }
}