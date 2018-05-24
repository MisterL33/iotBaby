
import React from 'react';
import { Modal, Platform, TouchableOpacity, StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Picker, AsyncStorage } from 'react-native';
import BabyList from '../screens/babyList';
import Team from '../screens/team';
import { isSignedIn, onSignOut, getUser, updateJwt } from '../tools/tokenManager';
import styles from '../css/home.style';
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

            this.handleUpdateToken(res.id)
            this.setState({ user: res })

          })
        }
      })
  }

  handleUpdateToken(userId) {
    updateJwt(userId)
    getUser().then(res => {
      console.log('isSigned getUser')
      res = JSON.parse(res)

    })
  }


  handleLogout = () => {

    onSignOut("jwt")
      .then((res) => {
        this.setState({ signedIn: res, checkedSignIn: false }, () => {
          this.props.navigation.navigate('Home')
        }

        )
      })
      .catch(err => alert("An error occurred"));

  }


  render() {



    return (
      <View>
        {this.state.user &&
          <Text>Bienvenue {this.state.user.nom} {this.state.user.prenom}</Text>
        }
        {this.state.checkedSignIn === true &&
          <View>
            <TouchableOpacity style={styles.nextButton} onPress={() => this.props.navigation.navigate('BabyList', { state: this.state })}>
              <Text>Liste baby</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nextButton} onPress={() => this.props.navigation.navigate('Message', { state: this.state })}>
              <Text>Message</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nextButton} onPress={() => this.props.navigation.navigate('Team', { state: this.state })}>
              <Text>Team</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nextButton} onPress={() => this.handleLogout()}>
              <Text>Deconnexion</Text>
            </TouchableOpacity>

          </View>
        }
        {this.state.checkedSignIn === false &&
          <View>
            <TouchableOpacity style={styles.nextButton} onPress={() => this.props.navigation.navigate('Register', { state: this.state })}>
              <Text>Inscription</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nextButton} onPress={() => this.props.navigation.navigate('Login', { state: this.state })}>
              <Text>Connexion</Text>
            </TouchableOpacity>

          </View>
        }
      </View>
    );
  };
}