import React from 'react';
import 'react-native-gesture-handler';
import firebase from './src/connection/index';
import { View, StatusBar } from 'react-native';
import Routes from './src/Routes';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/context/auths';

export default function App() {

  return(
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor='#121212' barStyle='light-content' />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
  
}