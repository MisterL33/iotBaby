
import React from 'react';
import { Modal, Platform, TouchableOpacity, StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Picker, AsyncStorage } from 'react-native';
import TeamMaker from '../screens/teamMaker';
import { isSignedIn, onSignOut, getUser, updateJwt } from '../tools/tokenManager';

import baseIp from '../config/ipconfig'
export default class Team extends React.Component {



  constructor(props) {
    super(props);


    this.state = {
      jwt: {},
      signedIn: false,
      checkedSignIn: false,
      user: {},
      checkTeam: false


    };

  }

  componentDidMount = () => {
    console.log('didMount team')

    isSignedIn("jwt")// super fonction disponible dans tokenManager qui vérifie qu'un token est présent, si oui on get l'user
      .then((res) => {
        if (res === false) {
          this.setState({ signedIn: res, checkedSignIn: false })
        } else {
          this.setState({ signedIn: res, checkedSignIn: true })
          
            console.log('isSigned')
            console.log(res)
            res = JSON.parse(res)
            updateJwt(res.id); // on passe l'id user à la fonction update qui va update le token actif
            this.setState({ user: res })

         
        }
      })





  }





  render() {



    return (
      <View>

        <Text>Team</Text>

        {this.state.user && this.state.user.team == null ?
          <View>
            <Button title='Créer une team' onPress={() => this.props.navigation.navigate('TeamMaker', { state: this.state })} />
            <Button title='Rejoindre une team' onPress={() => this.props.navigation.navigate('TeamJoin', { state: this.state })} />
          </View>
          : <View><Text> Team </Text></View>

        }

      </View>
    );
  };
}