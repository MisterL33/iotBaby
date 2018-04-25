
import React from 'react';
import { Modal, Platform, TouchableOpacity, StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Picker, AsyncStorage } from 'react-native';


export default class Register extends React.Component {



    constructor(props) {
        super(props);

        this.state = {
            email: null,
            password: null,
            myKey: null,
            user: {}


        };

    }

    componentDidMount() {

    }


    handleRegister = () => {
        console.log('register');

        fetch('http://10.33.2.216:1337/api/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                nom: this.state.nom,
                prenom: this.state.prenom,
                password: this.state.password,
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                let jwt = {
                    email: this.state.email,
                    nom: this.state.nom,
                    prenom: this.state.prenom,
                    token: responseJson 
                }
                AsyncStorage.setItem('jwt', JSON.stringify(jwt))
                .then(() => {
                    console.log('data saved')
           })

                
            })

    }


    render() {


        return (
            <View>
                <Text>Inscription</Text>
                <Button title='Accueil' onPress={() => this.props.navigation.navigate('Home')} />
                <View>
                    <TextInput value={this.state.email} onChangeText={(email) => this.setState({ email: email })} placeholder="Email" />
                    <TextInput value={this.state.nom} onChangeText={(nom) => this.setState({ nom: nom })} placeholder="Nom" />
                    <TextInput value={this.state.prenom} onChangeText={(prenom) => this.setState({ prenom: prenom })} placeholder="Prenom" />
                    <TextInput value={this.state.password} onChangeText={(password) => this.setState({ password: password })} placeholder="Password" />
                    
                    <Button title='OK' onPress={() => this.handleRegister()} />

                </View>
            </View>
        );
    }
}