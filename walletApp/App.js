import React, { Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      input: '',
      name: 'Rafael'
    }
    this.saveName = this.saveName.bind(this);
  }

  //sempre é chamado quando a tela for montada ciclo de vida do react native
  async componentDidMount(){
    let name = await AsyncStorage.getItem('name');
    this.setState({name: name});
  }

  //toda vez que o state é atualizado react native
  async componentDidUpdate(prevProps, prevState){
    const name = this.state.name;
    if(prevState != name){
      await AsyncStorage.setItem('name', this.state.name);
    }
  }

  saveName(){
    this.setState({
      name: this.state.input
    });
    alert(this.state.name);
    Keyboard.dismiss();
  }

  render(){
    return(
      <View style={style.container}>
        <View style={style.viewInput}>

          <TextInput 
            style={style.input}
            value={this.state.input}
            onChangeText={(text) => this.setState({input: text})}
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity onPress={this.saveName}>
            <Text style={style.btn}>+</Text>
          </TouchableOpacity>

        </View>   
        
        <Text style={style.name}>{this.state.name}</Text>

      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    alignItems: 'center',
  },
  viewInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input:{
    width: 350,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
  },
  btn: {
    backgroundColor: '#222',
    color: '#fff',
    height: 40,
    padding: 10,
    marginLeft: 4
  },
  name: {
    fontSize: 30,
    textAlign: 'center'
  }
});

export default App;