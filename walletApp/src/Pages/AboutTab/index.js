import React from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
} from 'react-native';

export  default function AbountTab() {

  return(
    <View style={style.container}>
      <Text>Página Sobre</Text>      
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