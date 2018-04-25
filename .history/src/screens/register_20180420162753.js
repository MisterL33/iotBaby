
import React from 'react';
import { Modal, Platform, TouchableOpacity, StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Picker } from 'react-native';


export default class Register extends React.Component {



    constructor(props) {
        super(props);

        this.state = {
            email: null,
            password: null,
            

        };

    }

    componentDidMount() {

    }


    handleRegister = () => {
        console.log(this.state);

        fetch('http://10.33.2.216:1337/user', {  
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: this.state.email,
              password: this.state.password,
            })
          })

    }


    render() {


        return (
            <View>

                <Text>Inscription</Text>
                <Button title='Accueil' onPress={() => this.props.navigation.navigate('Home')} />

                <View>
                    <TextInput value={this.state.email} onChangeText={(email) => this.setState({email: email})} placeholder="Email" />
                    <TextInput value={this.state.password} onChangeText={(password) => this.setState({password: password})} placeholder="Password" />
                    <Button title='OK' onPress={() => this.handleRegister()} />

                </View>



            </View>
        );
    }
}