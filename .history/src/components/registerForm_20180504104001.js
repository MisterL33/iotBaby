import React from 'react';
import { Modal, Platform, TouchableOpacity, StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Picker, AsyncStorage } from 'react-native';
import DatePicker from 'react-native-datepicker'


export default class RegisterForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: null,
            password: null,
            nom: null,
            prenom: null,
            sexe: 'Homme',
            naissance: null,
            myKey: null,
            user: {}


        };

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
                console.log(jwt)
                
                AsyncStorage.setItem('jwt', JSON.stringify(jwt))
                console.log(AsyncStorage.getItem('jwt'))



            })

    }

    render() {
        return (
            <View>
            <Text>Inscription</Text>
            <Button title='Accueil' onPress={() => this.props.nav.navigate('Home')} />
            <View>
                <TextInput value={this.state.email} onChangeText={(email) => this.setState({ email: email })} placeholder="Email" />
                <TextInput value={this.state.nom} onChangeText={(nom) => this.setState({ nom: nom })} placeholder="Nom" />
                <TextInput value={this.state.prenom} onChangeText={(prenom) => this.setState({ prenom: prenom })} placeholder="Prenom" />
                <TextInput secureTextEntry={true} value={this.state.password} onChangeText={(password) => this.setState({ password: password })} placeholder="Password" />
                <Picker
                    selectedValue={this.state.sexe}
                    style={{ height: 50, width: 100 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({ sexe: itemValue })}>
                    <Picker.Item label="Homme" value="H" />
                    <Picker.Item label="Femme" value="F" />
                </Picker>
                <DatePicker
                    style={{ width: 200 }}
                    date={this.state.naissance}
                    androidMode="spinner"
                    placeholder="Date de naissance"
                    format="YYYY-MM-DD"
                    minDate="1920-05-01"
                    maxDate="2016-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                        // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(naissance) => { this.setState({ naissance: naissance }) }}
                />
        
                <Button title='OK' onPress={() => this.handleRegister()} />
        
            </View>
        </View>
        );
    }
};


