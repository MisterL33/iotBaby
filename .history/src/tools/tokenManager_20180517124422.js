import { AsyncStorage } from "react-native";

import baseIp from '../config/ipconfig';

export const onSignIn = (key) => AsyncStorage.setItem(key, "true");

export const onSignOut = (key) => AsyncStorage.removeItem(key);

export const getUser = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('jwt')
      .then(res => {
        if (res !== null) {
          resolve(res);
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


export const updateJwt = () => {
  
  
          fetch(baseIp + '/api/login', {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  email: this.state.email,
                  password: this.state.password,
              })
          }).then((response) => response.json())
              .then((responseJson) => {
                 
                  
                  AsyncStorage.setItem('jwt', JSON.stringify(responseJson))
                  .then(() => {
                      this.props.navigation.navigate('Home')
                      console.log(responseJson)
                  })
              })
  
      }