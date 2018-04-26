import { AsyncStorage } from "react-native";



export const onSignIn = (key) => AsyncStorage.setItem(USER_KEY, "true");

export const onSignOut = (key) => AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = (key) => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};