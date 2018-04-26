import { AsyncStorage } from 'react-native';

 export function loggedIn(obj)  {
    if(IsJsonString(obj)){
        console.log('iézi')
        console.log(obj.json())
    }else{
        console.log('samereeeee')
    }
 }
    function IsJsonString(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

