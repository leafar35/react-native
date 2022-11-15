import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  Button
} from 'react-native';

export  default function HomeTab() {
  const navigator = useNavigation();

  function detail(){
    return navigator.navigate('detail');
  }

  return(
    <View style={style.container}>
      <Text>Tela Home</Text>
      <Button title='Detalhe' onPress={() => detail()} />
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