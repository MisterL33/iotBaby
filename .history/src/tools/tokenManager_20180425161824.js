import { AsyncStorage } from 'react-native';

 export function loggedIn()  {
    console.log('here')
    AsyncStorage.getItem("jwt").then((value) => {
        if((value).length === 0){
            return false
        }else{
            return true
        }
       }).done();


}