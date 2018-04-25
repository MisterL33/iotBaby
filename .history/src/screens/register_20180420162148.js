
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
                    <TextInput onChangeText={(email) => this.setState({email: email})} placeholder="Email" />
                    <TextInput onChangeText={(password) => this.setState({password: password})} placeholder="Password" />
                    <Button title='OK' onPress={() => this.handleRegister()} />

                </View>



            </View>
        );
    }
}