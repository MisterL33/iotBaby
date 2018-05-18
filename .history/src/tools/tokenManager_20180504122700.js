import { AsyncStorage } from "react-native";



export const onSignIn = (key) => AsyncStorage.setItem(key, "true");

export const onSignOut = (key) => AsyncStorage.removeItem(key);

export const getUser = (key) => AsyncStorage.getItem(key)

export const isSignedIn = (key) => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key)
      .then(res => {
        if (res !== null) {
          resolve(true);
          console.log('success')
          console.log(res)
        } else {
          resolve(false);
          console.log('fail')
        }
      })
      .catch(err => reject(err));
  });
};