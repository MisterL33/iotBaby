
import React from 'react';
import { Modal, Platform, TouchableOpacity, StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Picker, AsyncStorage } from 'react-native';

import { isSignedIn, onSignOut, getUser } from '../tools/tokenManager';
import baseIp from '../config/ipconfig'
export default class TeamJoin extends React.Component {



    constructor(props) {
        super(props);


        this.state = {
            jwt: {},
            signedIn: false,
            checkedSignIn: false,
            team: null
        };

    }

    componentDidMount = () => {
        console.log('didMount join')

        isSignedIn("jwt")// super fonction disponible dans tokenManager qui vérifie qu'un token est présent, si oui on get l'user
            .then((res) => {
                if (res === false) {
                    this.setState({ signedIn: res, checkedSignIn: false })
                } else {
                    this.setState({ signedIn: res, checkedSignIn: true })
                    getUser().then(res => {
                        console.log('dans le else')
                        res = JSON.parse(res)
                        this.setState({ user: res })
                    })
                }
            })
        this.getTeams().then((res)=>{
            this.setState({team: this.state.teams[0].nom})
        })
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
        console.log('dat team')
        console.log(this.state.team)
        fetch(baseIp + '/api/team/join', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: this.state.user.id,
                team: this.state.team
                

            })
        }).then(res =>console.log(res))
    }



    render() {
        return (
            <View>
                <Text>Rejoindre une team</Text>
                {this.state.teams &&
                    <Picker
                        selectedValue={this.state.team}
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