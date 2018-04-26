import { AsyncStorage } from 'react-native';

 export function loggedIn(obj)  {
     console.log(obj)
    try{
        console.log(obj.json())
    }catch(e){
       console.log(e)
    }
 }
    function IsJsonString(str) {
        try {
            (str).json()
        } catch (e) {
            return false;
        }
        return true;
    }

