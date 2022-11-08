import { Picker } from '@react-native-picker/picker';
import React, { Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  Switch,
  TextInput,
  Button
} from 'react-native';
import Slider from '@react-native-community/slider';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      age: '',
      gender: 'M',
      Limit: 0,
      Studenty: false,      
    }

    this.sendform = this.sendform.bind(this);
  }

  sendform(){
    if(this.state.name.trim() == ''){
      return alert('Informe o Nome');
    }
    if(this.state.age.trim() == ''){
      return alert('Informe a idade');
    }
    if(this.state.Limit == 0){
      return alert('Selecione o limite!');
    }
    alert('Conta aberta com sucesso!');
  }

  render(){
    return(
      <View style={style.container}>
        <TextInput style={style.input} placeholder='Informe seu nome' value={this.state.name} />
        <TextInput style={style.input} placeholder='Informe sua idade' value={this.state.age} />
        <Picker
          selectedValue={this.state.gender}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({gender: itemValue})
          }>
          <Picker.Item label="Masculino" value="M" />
          <Picker.Item label="Feminino" value="F" />
        </Picker>
        <Slider 
          minimumValue={0}
          maximumValue={100}
          onValueChange={(valueSelected) => this.setState({Limit: valueSelected})}
          value={this.state.Limit}
          minimumTrackTintColor='#00FF00'
          maximumTrackTintColor='#FF0000'
        />
        <View style={style.areaSwitch}>
          <Text style={[style.areasChildren, style.mT5]}>Não Estudante</Text>
          <Switch style={[style.areasChildren,{marginLeft: 4}]}
            onValueChange={(valueChange) => this.setState({Studenty: valueChange})}
            value={this.state.Studenty}
          />
          <Text style={[style.areasChildren, style.mT5]}>Estudante</Text>
        </View>
        <Button style={style.btn} title='Abrir Conta' name="Enviar" onPress={() => this.sendform()} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    padding: 50
  },
  btn: {
    flex:1,
    width: 250,
    flexDirection: 'column',
  },
  areaSwitch: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10
  },
  areasChildren: {
    flex: 1,
  },
  mT5: {
    marginTop: 5
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 5,
  },
});

export default App;