import React from 'react';
import 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/Routes';

export default function App() {

  return(
    <NavigationContainer>
      <StatusBar backgroundColor='#121212' barStyle='light-content' />
      <Routes />
    </NavigationContainer>
  );

}