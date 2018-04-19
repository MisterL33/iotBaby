
import React from 'react';
import { Modal, Platform, TouchableOpacity, StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Picker } from 'react-native';


export default class BabyList extends React.Component {



  constructor(props) {
    super(props);

  }

  componentDidMount(){
    this.getBabyList();
  }

  getBabyList = () => {

    fetch('http://10.33.2.216:1337/babyFoot')
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson)
        this.setState({babyList: responseJson})
        
    })

  }

        

  render() {
    if (this.state.babyList !== undefined) {
      const babyList = this.state.babyList
    }


    return (
      <View>

       <Text>BabyListe</Text>
       <Button title='Accueil' onPress={() => this.props.navigation.navigate('Home')} />
      
       {babyList &&  babyList !== undefined && babyList.map((baby, i) => (
         <View>
         <Title> Baby numéro {baby.id} </Title>
         <Text> Localité : {baby.location}  </Text>
         <Text> Joueurs max : {baby.maxPlayers} </Text>
         </View>
       ))}
      


      </View>
    );
  }
}