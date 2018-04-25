
import React from 'react';
import { Modal, Platform, TouchableOpacity, StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Picker } from 'react-native';


export default class Register extends React.Component {



    constructor(props) {
        super(props);

        this.state = {
            user: {},
        };

    }

    componentDidMount() {

    }


    handleRegister() {
        console.log('ok');
    }


    render() {


        return (
            <View>

                <Text>Inscription</Text>
                <Button title='Accueil' onPress={() => this.props.navigation.navigate('Home')} />

                <View>
                    <TextInput placeholder="Email" />
                    <TextInput placeholder="Password" />
                    <Button title='OK' onPress={() => this.handleRegister()} />

                </View>



            </View>
        );
    }
}