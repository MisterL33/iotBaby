import { AsyncStorage } from 'react-native';

 export function loggedIn(obj)  {
    if(obj !== null){
        console.log(obj.json())
    }



}