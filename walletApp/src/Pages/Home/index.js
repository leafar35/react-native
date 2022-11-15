import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  Button,
} from 'react-native';

export  default function Home() {
  const navigation = useNavigation();

  function navegationAbount(){
    navigation.navigate('Abount', { name: 'Rafael', email: 'vianini@teste.com.br' });
  }

  return(
    <View style={style.container}>
      <Text>Tela Home</Text>
      <Button title='Ir para o sobre' onPress={() => navegationAbount() } />
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