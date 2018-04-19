
import React from 'react';
import { Modal, Platform, TouchableOpacity, StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Picker } from 'react-native';


export default class BabyList extends React.Component {



  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      latitude: 44.837789,
      longitude: -0.57918,
      longitudeMarker: null,
      latitudeMarker: null,
      hourSessionFrom: '08:30',
      hourSessionTo: '12:30',
      address: 'Sanguinet',
      equipement: 'wind',
      user: {

      },
      markers: [{}],
      otherMarkers: [{}],
    };

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
    

    return (
      <View>

       <Text>BabyListe</Text>
       <Button title='Accueil' onPress={() => this.props.navigation.navigate('Home')} />
      
       {this.state.map((baby, i) => (
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