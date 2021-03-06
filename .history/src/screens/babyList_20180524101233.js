
import React from 'react';
import { Modal, Platform, TouchableOpacity, StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Picker } from 'react-native';

import baseIp from '../config/ipconfig'
export default class BabyList extends React.Component {



  constructor(props) {
    super(props);

    this.state = {
      babyList: null,
    };

  }

  componentDidMount() {
    this.getBabyList();
  }

  getBabyList = () => {

    fetch(baseIp + '/babyFoot')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('ICI ICI')
        console.log(responseJson)
        this.setState({ babyList: responseJson })

      })

  }



  render() {


    return (
      <View>

        <Text>BabyListe</Text>
        <Button title='Accueil' onPress={() => this.props.navigation.navigate('Home')} />

        {this.state.babyList && this.state.babyList.map((baby, i) => (
          <View key={i}>
            <Text> Baby numéro {baby.id} </Text>
            <Text> Localité : {baby.location}  </Text>
            <Text> Joueurs max : {baby.maxPlayers} </Text>
            <View>
            {baby.state == 0 ? 
            <Text> Etat : Disponible </Text> :
            baby.state == 1 
            <Text> Etat : Indisponible </Text> :
            }
            
            </View>
            <Button title='Rejoindre' onPress={() => this.props.navigation.navigate('Match')}/>
          </View>
        ))}



      </View>
    );
  }
}