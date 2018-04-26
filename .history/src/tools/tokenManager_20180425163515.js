import { AsyncStorage } from 'react-native';

 export function loggedIn(obj)  {
    if(IsJsonString(obj)){
        console.log(obj.json())
    }

    function IsJsonString(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

}