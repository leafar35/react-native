import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [name,setName] = useState('');
  const [input,setInput] = useState('');
  const nameInput = useRef(null);

  //component did amount
  useEffect(() => {

    async function getStorage(){
      const names = await AsyncStorage.getItem('names');
      if(names)
        setName(names);      
    }

    getStorage();

  } ,[]);

  useEffect(() => {

    async function saveStorage(){
      await AsyncStorage.setItem('names', name);
    }

    saveStorage();

  },[name])

  function updateNmae(){
    setName(input);
    setInput('');
    Keyboard.dismiss();
  }

  function newName(){
    nameInput.current.focus();
  }

  //Use mesmo ajuda no uso de memoria, não chamar semprea a cada mudança de valor e sim somente quando o valor name e alterado nesse contexto.
  const lengthName = useMemo(() => { 
    return name.length 
  },[name]);

  return (
    <View style={style.container}>

      <TextInput 
        placeholder='Digite novo nome'
        value={input}
        onChangeText={(text) => setInput(text)}
        ref={nameInput}
      />

      <TouchableOpacity style={style.btn} onPress={updateNmae}>
        <Text style={style.btntext}>Trocar Nome</Text>  
      </TouchableOpacity>

      <Text style={style.text}>{name}</Text>
      <Text style={style.text}>Tem {lengthName} letras</Text>

      <TouchableOpacity style={style.btn} onPress={newName}>
        <Text style={style.btntext}>Novo Nome</Text>  
      </TouchableOpacity>

    </View>
  );

}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
  },
  text: {
    fontSize: 35,
    color: '#000'
  },
  btn: {
    backgroundColor: '#222',
    alignItems: 'center',
  },
  btntext: {
    fontSize: 15,
    color: '#fff'
  }
});