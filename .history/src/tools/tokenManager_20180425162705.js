import { AsyncStorage } from 'react-native';

 export function loggedIn(obj)  {
   

        if(Object.keys(obj).length === 0){
            return false
        }else{
            return true
        }



}