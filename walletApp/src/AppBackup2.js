import React,{useEffect, useState} from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import List from './src/Components/List';
import firebase from './src/Connects/firebaseConnection';

export default function App(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function create(){
    if(email && password){
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((value) =>{
        setEmail('');
        setPassword('');
        alert('Usuário Criado'+value.user.email);
      }).catch((error) => {
        alert('Algo deu errado'+error.code);
      });
    }
  }
  
  return(
    <View style={style.container}>        
      <Text style={style.text}>E-mail</Text>
      <TextInput 
        value={email}
        style={style.input}
        onChangeText={(email) => setEmail(email)}
      />
      <Text style={style.text}>Password</Text>
      <TextInput 
        value={password}
        style={style.input}
        onChangeText={(password) => setPassword(password)}
      />
      <Button title='Cadastrar' onPress={() => create()} />

    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    padding: 50
  },
  text: {
    fontSize: 20
  },
  input: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#121212',
    height: 40,
    fontSize: 25,
  }
});