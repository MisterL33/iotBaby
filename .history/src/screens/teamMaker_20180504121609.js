
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
        <View>
                    <TextInput value={this.state.email} onChangeText={(email) => this.setState({ email: email })} placeholder="Email" />
                    <TextInput value={this.state.nom} onChangeText={(nom) => this.setState({ nom: nom })} placeholder="Nom" />
                    <TextInput value={this.state.prenom} onChangeText={(prenom) => this.setState({ prenom: prenom })} placeholder="Prenom" />
        <Button title='Créer une team' onPress={() => this.props.navigation.navigate('TeamMaker', { state: this.state })} />
        <Button title='Rejoindre une team' onPress={() => this.props.navigation.navigate('TeamJoin', { state: this.state })} />

      </View>
    );
  };
}