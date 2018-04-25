
import React from 'react';
import { Modal, Platform, TouchableOpacity, StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Picker, AsyncStorage } from 'react-native';
import BabyList from '../screens/babyList';
import { loggedIn } from '../tools/tokenManager'
export default class Home extends React.Component {



  constructor(props) {
    super(props);


    this.state = {
      jwt: {}


  };

  }

  componentDidMount = () => {
    console.log('didMount home')
    loggedIn()

  }

  handleLogout = () => {

    AsyncStorage.removeItem("jwt");
    this.setState({jwt: {}})
    this.props.navigation.navigate('Home')

  }


  render() {



    return (
      <View>

        <Text>Accueil</Text>

        { this.state.jwt && 
        <View>
        <Button title='Liste baby' onPress={() => this.props.navigation.navigate('BabyList', { state: this.state })} />
        <Button title='Deconnexion' onPress={() => this.handleLogout()} />
        </View>
        }
        { !this.state.jwt && 
        <View>
        <Button title='Inscription' onPress={() => this.props.navigation.navigate('Register', { state: this.state })} />
        <Button title='Connexion' onPress={() => this.props.navigation.navigate('Login', { state: this.state })} />
        </View>
        }
      </View>
    );
  }
}