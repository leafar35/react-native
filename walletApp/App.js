import React, { useState, useRef } from 'react';
import { 
  Text, 
  View, 
  SafeAreaView,
  TextInput,
  StyleSheet,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import api from './src/services/api';

export default function App() {

  const [cep, setCep] = useState('');
  const [result, setResult] = useState(null);
  const inputRef = useRef(null);

  function clearText(){
    setCep('');
    setResult(null);
    inputRef.current.focus();
    Keyboard.dismiss();
  }

  async function search(){
    try{
      if(!cep){
        setCep('');
        return alert('Digite um CEP');      
      }
      const response = await api.get(`/${cep}/json`);
      setResult(response.data);
      Keyboard.dismiss();
    }catch(e){
      alert('Houve um erro!');
    }
  }

  return(
    <SafeAreaView style={style.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={style.title}>Buscador de CEP</Text>
        <TextInput
          placeholder='Digite seu CEP'
          style={style.input}
          value={cep}
          onChangeText={(text) => setCep(text)}
          keyboardType='numeric'
          ref={inputRef}
        />        
      </View>
      <View style={style.areaBtn}>

        <TouchableOpacity style={[style.btn, { backgroundColor: 'green' }]} onPress={search}>
          <Text style={[style.btntext]}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[style.btn, { backgroundColor: 'red' }]} onPress={clearText}>
          <Text style={style.btntext}>Limpar</Text>
        </TouchableOpacity>

      </View>

      { result && 
        <View style={style.result}>
          <Text style={style.itemText}>CEP.: {result.cep}</Text>
          <Text style={style.itemText}>Logradouro.: {result.logradouro}</Text>
          <Text style={style.itemText}>Complemento.: {result.complement}</Text>
          <Text style={style.itemText}>Bairro.: {result.bairro}</Text>
          <Text style={style.itemText}>Uf.: {result.uf}</Text>
        </View>
      }      

    </SafeAreaView>
  );

}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80
  },
  title: {
    marginTop:25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    width:'90%',
    padding: 10,
    fontSize: 18,
  },
  areaBtn: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around'
  },
  btn: {
    height: 50,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  btntext: {
    color: '#fff',
    fontSize: 22
  },
  result: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 22 
  }
});