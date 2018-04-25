import { AsyncStorage } from 'react-native';

 export function loggedI = () => {
    AsyncStorage.getItem("jwt").then((value) => {
        console.log(value);
        this.setState({jwt: value})
      }).done();
    }