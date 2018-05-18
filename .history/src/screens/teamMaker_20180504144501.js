
import React from 'react';
import { Modal, Platform, TouchableOpacity, StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Picker, AsyncStorage } from 'react-native';

import { isSignedIn, onSignOut, getUser } from '../tools/tokenManager';


export default class TeamMaker extends React.Component {



    constructor(props) {
        super(props);


        this.state = {
            jwt: {},
            signedIn: false,
            checkedSignIn: false,
            teamName: null

        };

    }

    componentDidMount = () => {
        console.log('didMount teamMaker')
        
        isSignedIn("jwt")// super fonction disponible dans tokenManager qui vérifie qu'un token est présent, si oui on get l'user
            .then((res) => {
                if (res === false) {
                    this.setState({ signedIn: res, checkedSignIn: false })
                } else {
                    this.setState({ signedIn: res, checkedSignIn: true })
                    getUser().then(res =>{
                        console.log(res)
                    })
                }


            })
    }


    handleCreateTeam = () => {
        console.log('team créer')
        console.log('jsuis ici')


    }




    render() {



        return (
            <View>

                <Text>Créer ta team</Text>

                <TextInput value={this.state.teamName} onChangeText={(teamName) => this.setState({ teamName: teamName })} placeholder="Nom de la team" />

                <Button title='Valider' onPress={() => this.handleCreateTeam()} />
                

            </View>
        );
    };
}