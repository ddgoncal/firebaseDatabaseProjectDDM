
import React from 'react';
import { Button, FlatList, Text, StyleSheet, } from 'react-native';
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/database';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../reducers/currentUserSlice';

const Home = () => {
  const currentUser = useSelector(state => state.currentUser);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  //create user in firebase
  const createTask = () => {
    console.log("create task");
    firebase.app().database('https://shiftapp-9b217-default-rtdb.europe-west1.firebasedatabase.app/').ref('/tasks').set({
      title: 'Teste',
      description: 'Teste de descrição',
    }).then(() => console.log('Added task!')).catch((error) => console.log(error));
  };

  //Logout user
  const logoutUser = () => {
    auth().signOut().then(() => {
      console.log('User signed out!');
      dispatch(clearUser());
      navigation.navigate('Login');
    });
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
