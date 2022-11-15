import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  Button,
} from 'react-native';

export  default function Abount({/*route pode ser assim também */}) {

  const route = useRoute();
  const navigation = useNavigation();
  function navegationContact(){
    navigation.navigate('Contact');
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.name
    })
  },[navigation]);

  return(
    <View style={style.container}>
      <Text>Página Sobre</Text>
      <Text>{route.params?.name}</Text>
      <Text>{route.params?.email}</Text>
      <Button title='Ir para o contato' onPress={() => navegationContact() } />
      <Button title='Voltar tela' onPress={() => navigation.goBack() } />
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