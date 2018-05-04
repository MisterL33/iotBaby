
import React from 'react';
import { Modal, Platform, TouchableOpacity, StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Picker, AsyncStorage } from 'react-native';
import DatePicker from 'react-native-datepicker'
import RegisterForm from '../components/registerForm';
export default class Register extends React.Component {



    constructor(props) {
        super(props);

        this.state = {
            email: null,
            password: null,
            nom: null,
            prenom: null,
            sexe: null,
            naissance: null,
            myKey: null,
            user: {}


        };

    }

    render() {


        return (
            <View>
            <RegisterForm {... this.state} handleRegister={this.handleRegister.bind(this)}/>
            </View>
        );
    }
}