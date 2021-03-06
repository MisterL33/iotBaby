
import React from 'react';
import { Modal, Platform, TouchableOpacity, StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Picker, AsyncStorage } from 'react-native';
import TeamMaker from '../screens/teamMaker';
import { isSignedIn, onSignOut } from '../tools/tokenManager';


export default class Team extends React.Component {



  constructor(props) {
    super(props);


    this.state = {
      jwt: {},
      signedIn: false,
      checkedSignIn: false,
      checkTeam: false


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


  checkTeam = () => {
    console.log('verif team')

    fetch('http://10.33.2.216:1337/api/team/check', {
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
      console.log(responseJson)


  })




  render() {



    return (
      <View>

        <Text>Team</Text>
        {this.state.checkedSignIn === true &&

        }
        {this.state.checkedSignIn === false &&
          <Button title='Créer une team' onPress={() => this.props.navigation.navigate('TeamMaker', { state: this.state })} />
          <Button title='Rejoindre une team' onPress={() => this.props.navigation.navigate('TeamJoin', { state: this.state })} />
        }
      </View>
    );
  };
}