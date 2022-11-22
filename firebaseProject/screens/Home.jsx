import { firebase } from '@react-native-firebase/auth';
import React from 'react';
import { Button, Text } from 'react-native';

const Home = () => {

  //create user in firebase
  const createUser = () => {
    //create user
    firebase
      .auth()
      .createUserWithEmailAndPassword('test@gmail.com','Tentativa1.').then((user) => {
        console.log('User account created & signed in!');
      }
    )
  };

  return (
    <>
      <Text>Home</Text>
      <Button title="Create User" onPress={createUser} />
    </>
  )
}

export default Home;
