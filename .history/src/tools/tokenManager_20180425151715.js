import { AsyncStorage } from 'react-native';
module.exports = function() {    
    AsyncStorage.getItem("jwt").then((value) => {
        console.log(value);
        this.setState({jwt: value})
      }).done();
 }