import React,{useState} from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  TextInput,
  Button,
  SafeAreaView,
} from 'react-native';
import Login from './src/Components/Login';
import firebase from './src/Connects/firebaseConnection';

export default function App(){
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  async function create(){
    await firebase.auth().createUserWithEmailAndPassword(email, password).then((value) => {
      createUserFull(value.user.uid);
      alert('Cadastro realizado som sucesso');
    }).catch(() => {
      alert('Deu algo errado');
    });
  }

  if(!user){
    return <Login />
  }
  return(
    <SafeAreaView style={style.container}>      
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

    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingHorizontal: 10,
    backgroundColor: '#2223fc'
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