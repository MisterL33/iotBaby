
import React from 'react';
import { Modal, Platform, TouchableOpacity, StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Picker, AsyncStorage } from 'react-native';
import BabyList from '../screens/babyList';
import { isSignedIn, onSignOut } from '../tools/tokenManager';


export default class Team extends React.Component {



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
        if(res === false){
          this.setState({ signedIn: res, checkedSignIn: false })
        }else{
          this.setState({ signedIn: res, checkedSignIn: true })
        }
        
      
       })
  }




  render() {



    return (
      <View>

        <Text>Team</Text>

      </View>
    );
  };
}