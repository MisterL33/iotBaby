import { AsyncStorage } from 'react-native';

 export function loggedIn(obj)  {

    if(obj.json() === undefined){
        return false
    }else{
        console.log(obj.json())
        return true
    }
   



}