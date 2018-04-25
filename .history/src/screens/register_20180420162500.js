
import React from 'react';
import { Modal, Platform, TouchableOpacity, StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Picker } from 'react-native';


export default class Register extends React.Component {



    constructor(props) {
        super(props);

        this.state = {
            user:{
                email: null,
                password: null,
            }
            

        };

    }

    componentDidMount() {

    }


    handleRegister = () => {
        console.log(this.state);
    }


    render() {


        return (
            <View>

                <Text>Inscription</Text>
                <Button title='Accueil' onPress={() => this.props.navigation.navigate('Home')} />

                <View>
                    <TextInput value={this.state.user.email} onChangeText={(email) => this.setState({email: email})} placeholder="Email" />
                    <TextInput value={this.state.user.password} onChangeText={(password) => this.setState({password: password})} placeholder="Password" />
                    <Button title='OK' onPress={() => this.handleRegister()} />

                </View>



            </View>
        );
    }
}