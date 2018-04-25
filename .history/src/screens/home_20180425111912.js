
import React from 'react';
import { Modal, Platform, TouchableOpacity, StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Picker, AsyncStorage } from 'react-native';
import BabyList from '../screens/babyList';

export default class Home extends React.Component {



  constructor(props) {
    super(props);

  }

  componentDidMount = () => {

    AsyncStorage.getItem("myKey").then((value) => {
      console.log(value);
  }).done();

  }
  

  render() {



    return (
      <View>

       <Text>Accueil</Text>
       <Button title='Liste baby' onPress={() => this.props.navigation.navigate('BabyList', { state: this.state })} />
       <Button title='Inscription' onPress={() => this.props.navigation.navigate('Register', { state: this.state })} />
       <Button title='Connexion' onPress={() => this.props.navigation.navigate('Login', { state: this.state })} />
      </View>
    );
  }
}