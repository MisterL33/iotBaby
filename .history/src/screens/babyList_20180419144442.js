
import React from 'react';
import { Modal, Platform, TouchableOpacity, StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Picker } from 'react-native';


export default class BabyList extends React.Component {



  constructor(props) {
    super(props);

  }

  

  render() {



    return (
      <View>

       <Text>Accueil</Text>
       <Button title='Liste baby' onPress={() => this.props.navigation.navigate('BabyList', { state: this.state })} />
      </View>
    );
  }
}