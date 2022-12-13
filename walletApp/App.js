import React from 'react';
import Routes from './src/Routes';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import AuthProvider from './src/Context/auth';
import { NavigationContainer } from '@react-navigation/native';

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