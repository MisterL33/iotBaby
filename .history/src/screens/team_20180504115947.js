
import React from 'react';
import { Modal, Platform, TouchableOpacity, StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Picker, AsyncStorage } from 'react-native';
import BabyList from '../screens/babyList';
import { isSignedIn, onSignOut } from '../tools/tokenManager';


export default class Team extends React.Component {



  constructor(props) {
    super(props);


    this.state = {



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


  handleLogout = () => {

    onSignOut("jwt")
      .then(res => this.setState({ signedIn: res, checkedSignIn: false }))
      .catch(err => alert("An error occurred"));

  }


  render() {



    return (
      <View>

        <Text>Accueil</Text>
        {this.state.checkedSignIn === true &&
          <View>
            <Button title='Liste baby' onPress={() => this.props.navigation.navigate('BabyList', { state: this.state })} />
            <Button title='Message' onPress={() => this.props.navigation.navigate('Message', { state: this.state })} />
            <Button title='Deconnexion' onPress={() => this.handleLogout()} />
          </View>
        }
        {this.state.checkedSignIn === false &&
          <View>
            <Button title='Inscription' onPress={() => this.props.navigation.navigate('Register', { state: this.state })} />
            <Button title='Connexion' onPress={() => this.props.navigation.navigate('Login', { state: this.state })} />
          </View>
        }
      </View>
    );
  };
}