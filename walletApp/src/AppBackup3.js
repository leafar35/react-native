import React,{useState} from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  TextInput,
  Button,
  ActivityIndicator,
} from 'react-native';
import firebase from './src/Connects/firebaseConnection';

export default function App(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  async function singIn(){
    if(email && password){
      await firebase.auth().signInWithEmailAndPassword(email, password)
      .then((value) =>{
        setUser(value.user.email);
        alert('Bem vindo.: '+value.user.email);
      }).catch((error) => {
        alert('Algo deu errado');
        setUser('');
      });
      setEmail('');
      setPassword('');
    }
  }

  async function singOut(){
    await firebase.auth().signOut();
    setUser('');
    alert('Deslogado som sucesso!')
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
      <Button title='SingIn' onPress={() => singIn()} />      

      <Text style={{marginTop: 20, marginBottom: 20, fontSize: 20, textAlign: 'center'}}>
        {user}
      </Text>
      { user.length > 0 ? 
      (        
        <Button title='SingOut' onPress={() => singOut()} />
      ) : (
        <Text style={{marginTop: 20, marginBottom: 20, fontSize: 20, textAlign: 'center'}}>
          Nenhum usuário logado
        </Text>
      )}      
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