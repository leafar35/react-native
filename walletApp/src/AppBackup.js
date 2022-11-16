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
  const [name, setName] = useState('Carregando...');
  const [idade, setIdade] = useState('');
  const [users, setUsers] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {

    async function getDate(){
      await firebase.database().ref('usuarios/1').on('value', (snapshot) => {
        setName(snapshot.val().nome);
        setIdade(snapshot.val().idade);
      });
    }

    async function generateNode(){
      await firebase.database().ref('tipo').set('usuario');
    }

    async function removeNode(){
      await firebase.database().ref('usuario').remove();
    }

    async function newUser(){
      await firebase.database().ref('usuarios').child(3).set({
        nome: 'Rafael 1',
        idade: 17
      });
    }

    async function updateChildren(){
      await firebase.database().ref('usuarios').child(3).update({
        nome: 'Rafael Vianini',
        idade:36
      })
    }

    async function getUsers(){
      setUsers([]);
      await firebase.database().ref('usuarios').on('value', (snapshot) => {
        snapshot.forEach(element => {
          let data = {
            key: element.key,
            nome: element.val().nome,
            idade: element.val().idade
          }
          setUsers(oldArray => [...oldArray, data]);
          setLoad(false);
        })
      });
    }

    //generateNode();
    //removeNode();
    //newUser();
    updateChildren();
    getDate();
    getUsers();

  },[]);

  async function create(){
    if(name && idade){
      let usuarios = await firebase.database().ref('usuarios');
      let key = usuarios.push().key;
      usuarios.child(key).set({
        nome: name,
        idade: idade
      });
      alert('Cadastrado com sucesso!');
      setName('');
      setIdade('');
    }
  }
  
  return(
    <View style={style.container}>        
      <Text style={style.name}>Nome</Text>
      <TextInput 
        value={name}
        style={style.input}
        onChangeText={(text) => setName(text)}
      />
      <Text style={style.name}>Idade</Text>
      <TextInput 
        value={idade}
        style={style.input}
        onChangeText={(text) => setIdade(text)}
      />
      <Button title='Novo funcionário' onPress={() => create()} />

      {load ? 
        (
          <ActivityIndicator color='#121212' size={45} />
        ) :
        (
          <FlatList 
            keyExtractor={(item) => item.key}
            data={users}
            renderItem={({item}) => ( <List data={item} /> )}
          />
        )
      }      

    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    padding: 50
  },
  name: {
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