import { AsyncStorage } from 'react-native';

 export function loggedIn()  {
    console.log('here')
    AsyncStorage.getItem("jwt").then((value) => {
        if(_.isEmpty(value)){
            return false
        }else{
            return true
        }
       }).done();


}