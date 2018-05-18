
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


    handleLogin = () => {
        
        
                fetch(baseIp + '/api/login', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: this.state.email,
                        password: this.state.password,
                    })
                }).then((response) => response.json())
                    .then((responseJson) => {
                       
                        
                        AsyncStorage.setItem('jwt', JSON.stringify(responseJson))
                        .then(() => {
                            nav.navigate('Home')
                            console.log(responseJson)
                        })
                    })
        
            }

    


    render() {


        return (
            <View>
                <Text>Login</Text>
                <Button title='Accueil' onPress={() => this.props.navigation.navigate('Home')} />
                <View>
                    <TextInput value={this.state.email} onChangeText={(email) => this.setState({ email: email })} placeholder="Email" />
                    <TextInput value={this.state.password} onChangeText={(password) => this.setState({ password: password })} placeholder="Password" />
                    <Button title='OK' onPress={() => this.handleLogin())} />

                </View>
            </View>
        );
    }
}