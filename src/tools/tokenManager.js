import { AsyncStorage } from 'react-native';

 export function loggedIn()  {

    AsyncStorage.getItem("jwt").then((value) => {
        if(Object.keys(value).length === 0){
            return false
        }else{
            return true
        }
       }).done();


}