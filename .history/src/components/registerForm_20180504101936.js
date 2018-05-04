import React from 'react';
import { Modal, Platform, TouchableOpacity, StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Picker, AsyncStorage } from 'react-native';
import DatePicker from 'react-native-datepicker'


export default class RegisterForm extends React.Component {
    render() {
        return (
            <View>
            <Text>Inscription</Text>
            <Button title='Accueil' onPress={() => this.props.navigation.navigate('Home')} />
            <View>
                <TextInput value={this.props.email} onChangeText={(email) => this.setState({ email: email })} placeholder="Email" />
                <TextInput value={this.props.nom} onChangeText={(nom) => this.setState({ nom: nom })} placeholder="Nom" />
                <TextInput value={this.props.prenom} onChangeText={(prenom) => this.setState({ prenom: prenom })} placeholder="Prenom" />
                <TextInput secureTextEntry={true} value={this.props.password} onChangeText={(password) => this.setState({ password: password })} placeholder="Password" />
                <Picker
                    selectedValue={this.props.sexe}
                    style={{ height: 50, width: 100 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({ sexe: itemValue })}>
                    <Picker.Item label="Homme" value="H" />
                    <Picker.Item label="Femme" value="F" />
                </Picker>
                <DatePicker
                    style={{ width: 200 }}
                    date={this.props.naissance}
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
        
                <Button title='OK' onPress={() => this.props.handleRegister()} />
        
            </View>
        </View>
        );
    }
};


