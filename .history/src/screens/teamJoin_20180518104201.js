
import React from 'react';
import { Modal, Platform, TouchableOpacity, StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Picker, AsyncStorage } from 'react-native';

import { isSignedIn, onSignOut } from '../tools/tokenManager';

import baseIp from '../config/ipconfig'
export default class TeamJoin extends React.Component {



    constructor(props) {
        super(props);


        this.state = {
            jwt: {},
            signedIn: false,
            checkedSignIn: false,
            team:
                {
                    nom: 'Selectionnez une team'
                }

        };

    }

    componentDidMount = () => {
        console.log('didMount join')

        isSignedIn("jwt")// super fonction disponible dans tokenManager qui vérifie qu'un token est présent
            .then((res) => {
                if (res === false) {
                    this.setState({ signedIn: res, checkedSignIn: false })
                } else {
                    this.setState({ signedIn: res, checkedSignIn: true })
                }


            })

        this.getTeams()
    }


    getTeams = () => {
        fetch(baseIp + '/team')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                this.setState({ teams: responseJson })
            })
    }

    handleJoinTeam = () => {

    }





    render() {
        return (
            <View>
                <Text>Rejoindre une team</Text>
                {this.state.teams &&
                    <Picker
                        selectedValue={this.state.teams[0].nom}
                        style={{ height: 50, width: 100 }}
                        onValueChange={(itemValue, itemIndex) => this.setState({ team: itemValue })}>
                        {this.state.teams.map((team, i) => (
                            <Picker.Item key={i} label={team.nom} value={team.id} />
                        ))}
                    </Picker>
                }
                <Button title='Valider' onPress={() => this.handleJoinTeam()} />
            </View>
        );
    };
}