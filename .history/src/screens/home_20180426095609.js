
import React from 'react';
import { Modal, Platform, TouchableOpacity, StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Picker, AsyncStorage } from 'react-native';
import BabyList from '../screens/babyList';
import { isSignedIn } from '../tools/tokenManager'
export default class Home extends React.Component {



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
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert("An error occurred"));
  }


handleLogout = () => {

  AsyncStorage.removeItem("jwt");
  this.setState({ jwt: {} })
  this.props.navigation.navigate('Home')

}


render() {



  return (
    <View>

      <Text>Accueil</Text>
      {this.state.checkedSignIn === true &&
        <View>
          <Button title='Liste baby' onPress={() => this.props.navigation.navigate('BabyList', { state: this.state })} />
          <Button title='Deconnexion' onPress={() => this.handleLogout()} />
        </View>
      }
      {this.state.checkedSignIn === true &&
      <View>
        <Button title='Inscription' onPress={() => this.props.navigation.navigate('Register', { state: this.state })} />
        <Button title='Connexion' onPress={() => this.props.navigation.navigate('Login', { state: this.state })} />
      </View>
}
    </View>
  );
};
