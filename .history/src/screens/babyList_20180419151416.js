
import React from 'react';
import { Modal, Platform, TouchableOpacity, StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Picker } from 'react-native';


export default class BabyList extends React.Component {



  constructor(props) {
    super(props);

  }

  getBabyList = (BabyFoots) => {
    
       
                    fetch('https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + places[key].name + '&key=AIzaSyBDNk4XSccyK_KFVML352LLYXnI3Tp7S6c').then(
                        (res) => {
                          console.log(res)
    
                        })
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