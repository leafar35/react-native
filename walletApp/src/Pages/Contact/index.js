import { useNavigation, useRoute, StackActions } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  Button
} from 'react-native';

export  default function Contact({/*route pode ser assim também */}) {

  const route = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.name
    })
  },[navigation]);

  function handleHome(){
    navigation.dispatch(StackActions.popToTop());
  }

  return(
    <View style={style.container}>
      <Text>Páge contact</Text>
      <Button title='Voltar home' onPress={() => handleHome() } />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});