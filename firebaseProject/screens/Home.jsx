
import React from 'react';
import { Button, FlatList, Text, StyleSheet, View } from 'react-native';
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
    <Text style={styles.title}>Welcome {currentUser.email}!</Text>
    <FlatList />
    <View style={styles.buttonContainer}>
      <Button style={styles.createTaskButton} title="Create Task" onPress={createTask} />
      <View style={styles.space} />
      <Button style={styles.logout_button} title="Logout" onPress={logoutUser} />
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
  },
  buttonContainer: {
    flexDirection: 'column',
    marginTop: 30,
  },
  createTaskButton: {
    margin: 20,
  },
  space: {
    width: 10,
    height: 10,
  },
  logout_button: {
    height: 100,
    backgroundColor: '#FF9800',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  },
})

export default Home;
