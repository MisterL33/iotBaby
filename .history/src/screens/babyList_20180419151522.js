
import React from 'react';
import { Modal, Platform, TouchableOpacity, StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Picker } from 'react-native';


export default class BabyList extends React.Component {



  constructor(props) {
    super(props);

  }

  componentDidMount(){
    getBabyList();
  }

  getBabyList = (BabyFoots) => {
    
       
                    fetch('http://localhost:1337/babyFoot').then(
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