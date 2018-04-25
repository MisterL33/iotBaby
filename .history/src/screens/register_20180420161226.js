
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

       <Text>Inscription</Text>
       <Button title='Accueil' onPress={() => this.props.navigation.navigate('Home')} />
      
       {this.state.babyList && this.state.babyList.map((baby, i) => (
         <View>
                   <TextInput placeholder="Email"/>
                   <TextInput placeholder="Password" />
                   
      />
         </View>
       ))}
      


      </View>
    );
  }
}