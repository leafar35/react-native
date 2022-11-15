import React from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
} from 'react-native';

export  default function ContactTab() {

  return(
    <View style={style.container}>
      <Text>Páge contact</Text>
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