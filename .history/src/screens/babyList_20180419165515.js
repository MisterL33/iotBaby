
import React from 'react';
import { Modal, Platform, TouchableOpacity, StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Picker } from 'react-native';


export default class BabyList extends React.Component {



  constructor(props) {
    super(props);

    this.state = {
     babyList: null,
    };

  }

  componentDidMount(){
    this.getBabyList();
  }

  getBabyList = () => {

    fetch('http://10.33.2.216:1337/user')
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson)
        this.setState({babyList: responseJson})
        
    })

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