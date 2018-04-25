
import React from 'react';
import { Modal, Platform, TouchableOpacity, StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Picker, AsyncStorage } from 'react-native';


export default class Login extends React.Component {



    constructor(props) {
        super(props);

        this.state = {
            email: null,
            password: null,
            myKey: null,


        };

    }




    handleLogin = () => {
        console.log(this.state);

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
                console.log(responseJson)
                AsyncStorage.setItem("JWT", responseJson)
                AsyncStorage.getItem("JWT").then((value) => {
                    this.setState({"JWT": value});
                }).done(console.log(this.state));
                
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