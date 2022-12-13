import firebase from 'firebase/app';
import { addUser, clearUser } from "../reducers/currentUserSlice";

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

export const initCheckAuthState = () => {
  console.log('Checking auth state');
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      console.log('User is signed in');
    } else {
      console.log('User is signed out');
    }
  });
};
