import { AsyncStorage } from 'react-native';

 export function loggedIn()  {
    console.log('here')
    AsyncStorage.getItem("jwt").then((value) => {
console.log(value)
       }).done();


}