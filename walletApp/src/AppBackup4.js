import React,{useState} from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  TextInput,
  Button,
  ActivityIndicator,
} from 'react-native';
import firebase from './Connects/firebaseConnection';

export default function App(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  async function createUserFull(key){
    await firebase.database().ref('usuarios').child(key).set({
      name: name
    });
    setName('');
    setEmail('');    
    setPassword('');    
  }

  async function create(){
    await firebase.auth().createUserWithEmailAndPassword(email, password).then((value) => {
      createUserFull(value.user.uid);
      alert('Cadastro realizado som sucesso');
    }).catch(() => {
      alert('Deu algo errado');
    });
  }

  return(
    <View style={style.container}>        
    <Text style={style.text}>Nome</Text>
      <TextInput 
        value={name}
        style={style.input}
        onChangeText={(name) => setName(name)}
      />
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