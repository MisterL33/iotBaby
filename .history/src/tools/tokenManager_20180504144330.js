import { AsyncStorage } from "react-native";



export const onSignIn = (key) => AsyncStorage.setItem(key, "true");

export const onSignOut = (key) => AsyncStorage.removeItem(key);

export const getUser = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('jwt')
      .then(res => {
        if (res !== null) {
          resolve(res);
          console.log('get User')
        //  console.log(res)
          
        } else {
          resolve(false);
          console.log('fail')
        }
      })
      .catch(err => reject(err));
  });
}

export const isSignedIn = (key) => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key)
      .then(res => {
        if (res !== null) {
          resolve(true);
          console.log('success')
          
        } else {
          resolve(false);
          console.log('fail')
        }
      })
      .catch(err => reject(err));
  });
};