
import React from 'react';
import { Modal, Platform, TouchableOpacity, StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Picker, AsyncStorage } from 'react-native';

import { isSignedIn, onSignOut } from '../tools/tokenManager';


export default class TeamMaker extends React.Component {



    constructor(props) {
        super(props);


        this.state = {
            jwt: {},
            signedIn: false,
            checkedSignIn: false


        };

    }

    componentDidMount = () => {
        console.log('didMount home')

        isSignedIn("jwt")// super fonction disponible dans tokenManager qui vérifie qu'un token est présent
            .then((res) => {
                if (res === false) {
                    this.setState({ signedIn: res, checkedSignIn: false })
                } else {
                    this.setState({ signedIn: res, checkedSignIn: true })
                }


            })
    }




    render() {



        return (
            <View>

                <Text>Créer ta team</Text>

                <TextInput value={this.state.teamName} onChangeText={(email) => this.setState({ email: email })} placeholder="Email" />

                <Button title='Valider' onPress={() => this.props.navigation.navigate('Team', { state: this.state })} />
                

            </View>
        );
    };
}