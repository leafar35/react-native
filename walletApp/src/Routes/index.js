import React, { Component } from 'react';
import { DrawerRouter, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import  Feather from 'react-native-vector-icons/Feather';

import Abount from '../Pages/About';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home';

import StackRoutes from './StackRoutes';
import AbountTab from '../Pages/AboutTab';
import ContactTab from '../Pages/ContactTab';
import HomeTab from '../Pages/HomeTab';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function Routes(){
  return (
    /* Pilha de navegação
    <Stack.Navigator>

        <Stack.Screen name='Home' component={Home} options={{title: 'Página de inicio', headerStyle:{backgroundColor:'#121212'}, headerTintColor:'#fff'}} />
        <Stack.Screen name='Abount' component={Abount} options={{title: 'Página sobre'}} />
        <Stack.Screen name='Contact' component={Contact} options={{title: 'Contato'}} />

      </Stack.Navigator>
    */

    /* usa os dois modelos tanto tab quando o stack que faz um rastro de acessos
    <Tab.Navigator
        screenOptions={{
            headerShown:false, //esconde o heaeer  das paginas de todas
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false, //esconde o name de cada icon 
            //tabBarActiveTintColor: '#fff' cor do elemento ativo do tab          
        }}
        >

        <Tab.Screen 
            name='HomeStack'
            component={StackRoutes}
            options={{
            tabBarIcon: ({color, size}) => {
                return <Feather name='home' color={color} size={size} />
            }
            }}
        />
        <Tab.Screen 
            name='Sobre'
            component={AbountTab}
            options={{
            tabBarIcon: ({color, size}) => {
                return <Feather name='file-text' color={color} size={size} />
            }
            }}
        />
        <Tab.Screen 
            name='Contato'
            component={ContactTab}          
            options={{
            headerShown:false,
            tabBarIcon: ({color, size}) => {
                return <Feather name='phone-call' color={color} size={size} />
            }
            }}
        />
    </Tab.Navigator>
    */
    /* corrige erros de legancy useLegacyImplementation={true}> */
    <Drawer.Navigator useLegacyImplementation={true}
            screenOptions={{
                tabBarShowLabel: false, //esconde o name de cada icon 
            }}            
        >
        <Drawer.Screen 
            name='HomeStack'
            component={StackRoutes}
        />
        <Drawer.Screen 
            name='Sobre'
            component={AbountTab}
        />
        <Drawer.Screen 
            name='Contato'
            component={ContactTab}
        />
    </Drawer.Navigator>
  )
}