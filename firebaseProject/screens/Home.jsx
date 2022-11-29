import { firebase } from '@react-native-firebase/auth';
import { current } from '@reduxjs/toolkit';
import React from 'react';
import { Button, FlatList, Text, StyleSheet, } from 'react-native';
import { useSelector } from 'react-redux';

const Home = () => {
  const currentUser = useSelector(state => state.currentUser);
  //create user in firebase
  const createTask = () => {

  };

  //Logout user
  const logoutUser = () => {
    firebase.auth().signOut();
  };

  return (
    <>
      <Text>Bem-Vindo {currentUser.email}</Text>
      <FlatList />
      <Button title="Create Task" onPress={createTask} />

      <Button styles={styles.logout_button} title="Logout" onPress={logoutUser} />
    </>
  )
}

const styles = StyleSheet.create({
  logout_button: {
    width: '100%',
      height: 50,
      backgroundColor: '#FF9800',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0
  }
})

export default Home;
