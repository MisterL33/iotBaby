
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
          getUser().then(res => {
            //console.log('isSigned getUser')
            res = JSON.parse(res)
            
            // on passe l'id user à la fonction update qui va update le token actif
            AsyncStorage.removeItem(key);
            this.handleUpdateToken()
            this.setState({ user: res })
            
          })
        }
      })
  }

  handleUpdateToken(){
   
    getUser().then(res => {
      console.log('isSigned getUser')
      res = JSON.parse(res)
      console.log(res)
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