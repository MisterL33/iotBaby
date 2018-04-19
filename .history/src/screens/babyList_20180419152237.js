
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
    
       
                    fetch('http://10.33.2.216:1337/user').then(
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