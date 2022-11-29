import React, { useState } from 'react'
import { Button, Dimensions, TextInput, View, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { addUser } from '../reducers/currentUserSlice';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigator = useNavigation();

  const loginUser = (email, password) => {
    auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        dispatch(addUser(userCredential.user));
        setIsLoading(false);
        setError('');
        navigator.navigate('Home');
      })
      .catch(() => {
        auth().createUserWithEmailAndPassword(email,password)
          .then((userCredential) => {
            dispatch(addUser(userCredential.user));
            setIsLoading(false);
            setError('');
            navigator.navigate('Home');
          })
          .catch(error => {
            setIsLoading(false);
            setError(error.message);
            Alert.alert(error.message);
          });
      });
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        label='Email Address'
        placeholder='example@gmail.com'
        value={email}
        onChangeText={email => setEmail(email)}
        autoCapitalize={'none'}
      />

      <TextInput
        label='Password'
        placeholder='enter password'
        value={password}
        onChangeText={password => setPassword(password)}
        secureTextEntry={true}
      />
      {
        isLoading ?
          <ActivityIndicator
            size='large'
            color='#0F5340'
            style={{marginBottom: 80}}
          /> :
          <Button
            onPress={() => loginUser(email, password)}
            title={error || 'Sign In'}
          />
      }
    </View>
  )
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#EFEFEF',
    height: height - 80,
    width: width,
    marginTop: 80,
    paddingVertical: height / 25,
    paddingHorizontal: width / 20,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
})

export default Login;
