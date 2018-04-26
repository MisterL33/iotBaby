
import React from 'react';
import { Modal, Platform, TouchableOpacity, StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Picker, AsyncStorage } from 'react-native';

import { loggedIn } from '../tools/tokenManager'
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
console.log('login')

        fetch('http://10.33.2.216:1337/api/login', {
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
                    this.props.navigation.navigate('Home')
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
                    <Button title='OK' onPress={() => this.handleLogin()} />

                </View>
            </View>
        );
    }
}