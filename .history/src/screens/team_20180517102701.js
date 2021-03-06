
import React from 'react';
import { Modal, Platform, TouchableOpacity, StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Picker, AsyncStorage } from 'react-native';
import TeamMaker from '../screens/teamMaker';
import { isSignedIn, onSignOut, getUser } from '../tools/tokenManager';

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
            getUser().then(res => {
                
                res = JSON.parse(res)
                this.setState({ user: res })
            })
        }


    })


      this.checkTeam()
  }


  checkTeam = () => {
    console.log('verif team')
    console.log(this.state)
    fetch(baseIp + '/api/team/check', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          owner: this.state.user.id,
          

      })
  }).then((response) => response.json())
  .then((responseJson) => {
      console.log('responseJson')
      console.log(responseJson)


  })

  }


  render() {



    return (
      <View>

        <Text>Team</Text>


          <Button title='Créer une team' onPress={() => this.props.navigation.navigate('TeamMaker', { state: this.state })} />
          <Button title='Rejoindre une team' onPress={() => this.props.navigation.navigate('TeamJoin', { state: this.state })} />

      </View>
    );
  };
}