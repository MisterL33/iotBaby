
import React from 'react';
import { Modal, Platform, TouchableOpacity, StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Picker } from 'react-native';


export default class Register extends React.Component {



  constructor(props) {
    super(props);

    this.state = {
     user: {},
    };

  }

  componentDidMount(){

  }



        

  render() {
    

    return (
      <View>

       <Text>BabyListe</Text>
       <Button title='Accueil' onPress={() => this.props.navigation.navigate('Home')} />
      
       {this.state.babyList && this.state.babyList.map((baby, i) => (
         <View>
         <Text> Baby numéro {baby.id} </Text>
         <Text> Localité : {baby.location}  </Text>
         <Text> Joueurs max : {baby.maxPlayers} </Text>
         </View>
       ))}
      


      </View>
    );
  }
}