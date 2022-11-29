import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Details from './screens/Details';
import { initializeFirebase, checkAuthState } from './services/firebase';
import { firebase } from '@react-native-firebase/auth';
import { Provider } from 'react-redux';
import { store } from './store';
import Login from './screens/Login';

const App = () => {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    console.log('App mounted');
    initializeFirebase();
    firebase.auth().onAuthStateChanged(user => setIsUserLogged(!!user));
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
