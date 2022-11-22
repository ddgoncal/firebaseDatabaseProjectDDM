import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Details from './screens/Details';
import { initializeFirebase, checkAuthState } from './services/firebase';
import { firebase } from '@react-native-firebase/auth';

const App = () => {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    console.log('App mounted');
    initializeFirebase();
    firebase.auth().onAuthStateChanged(user => setIsUserLogged(!!user));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
