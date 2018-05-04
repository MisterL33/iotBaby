
import React from 'react';
import { Modal, Platform, TouchableOpacity, StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Picker, AsyncStorage } from 'react-native';
import DatePicker from 'react-native-datepicker'

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
                naissance: this.state.naissance,
                sexe: this.state.sexe
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
                        this.props.navigation.navigate('Home')
                    })



            })

    }


    render() {


        return (

        );
    }
}