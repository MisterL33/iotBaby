
import React from 'react';
import { Modal, Platform, TouchableOpacity, StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Picker } from 'react-native';


export default class BabyList extends React.Component {



  constructor(props) {
    super(props);

  }

  componentDidMount(){
    this.getBabyList();
  }

  getBabyList = (BabyFoots) => {
    
       
    fetch('https://maps.google.com/maps/api/geocode/json?address=' + this.state.address + '&key=AIzaSyBETNe1QHYEoXhx3-lhQWICKWm97syaOcA').then(
      (res) => this.setState({ object: JSON.parse(res._bodyText) }, () => {

        var object = this.state.object.results
        var results = []
        object.map((result) => results.push(result))   // ici on met toutes les locations trouvées, ce serait bien de les afficher pour choisir
        this.setState({ latitude: results[0].geometry.location.lat })
        this.setState({ longitude: results[0].geometry.location.lng })
      }
      ));

        }

  render() {



    return (
      <View>

       <Text>BabyList</Text>
       <Button title='Accueil' onPress={() => this.props.navigation.navigate('Home')} />
      </View>
    );
  }
}