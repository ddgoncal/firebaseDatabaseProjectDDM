import { firebase } from "@react-native-firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAloox9kW_FpoRVjnbivbFVlOf5FtV2PFk",
};

export const initializeFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    console.log('Firebase initialized');
  } else {
    firebase.app(); // if already initialized, use that one
    console.log('Firebase already initialized');
  }
};

export const checkAuthState = () => {
  console.log('Checking auth state');
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      console.log('User logged in: ', user);
    } else {
      console.log('No user logged in');
    }
  });
};
