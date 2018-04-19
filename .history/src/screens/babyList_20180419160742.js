
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
    
       
    fetch('https://maps.google.com/maps/api/geocode/json?address=Sanguinet&key=AIzaSyBETNe1QHYEoXhx3-lhQWICKWm97syaOcA').then(
      (res) => this.setState({ object: JSON.parse(res._bodyText) }, () => {

        console.log(res);
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