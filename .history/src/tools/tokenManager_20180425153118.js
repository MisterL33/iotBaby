import { AsyncStorage } from 'react-native';

 export function loggedIn()  {
    AsyncStorage.getItem("jwt").then((value) => {
        return value;
      }).done();
    }