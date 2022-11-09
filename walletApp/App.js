import { Picker } from '@react-native-picker/picker';
import React, { Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  Switch,
  TextInput,
  Button,
  TouchableOpacity
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
    let html = `Conta aberta som sucesso \n`;
    html += `Nome do titular.: ${this.state.name} \n`;
    html += `Idade do titular.: ${this.state.age} \n`;
    html += `Sexo do titular.: ${(this.state.gender == 'M') ? 'Masculino \n' : 'Feminino \n'}`;
    html += `Limite da conta.: ${this.state.Limit.toFixed(2)} \n`;
    html += `Conta estudante? ${(this.state.Studenty ? 'Sim \n' : 'Não \n')}`;
    alert(html);
  }

  render(){
    return(
      <View style={style.container}>
        <Text style={style.title}>Cadastro do Banco Digital BD</Text>
        <View style={style.areaSwitch}>
          <Text style={[style.areasChildren, style.mT5]}>Não Estudante</Text>
          <Switch style={[style.areasChildren,{marginLeft: 5}]}
            onValueChange={(valueChange) => this.setState({Studenty: valueChange})}
            value={this.state.Studenty}
          />
          <Text style={[style.areasChildren, style.mT5]}>Estudante</Text>
        </View>
        <TextInput style={style.input} placeholder='Informe seu nome' value={this.state.name} onChangeText={(text) => this.setState({name: text})} />
        <TextInput style={style.input} placeholder='Informe sua idade' value={this.state.age} onChangeText={(text) => this.setState({age: text})} />
        <Picker
          selectedValue={this.state.gender}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({gender: itemValue})
          }>
          <Picker.Item label="Masculino" value="M" />
          <Picker.Item label="Feminino" value="F" />
        </Picker>
        <View style={style.mB10}>
          <Text>Selecione seu limite</Text>
          <Slider
            minimumValue={0}
            maximumValue={100}
            onValueChange={(valueSelected) => this.setState({Limit: valueSelected})}
            value={this.state.Limit}
            minimumTrackTintColor='#00FF00'
            maximumTrackTintColor='#FF0000'
          />
        </View>
        <TouchableOpacity style={style.appButtonContainer} onPress={() => this.sendform()}>
          <Text style={style.appButtonText}>Abrir conta</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    padding: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  areaSwitch: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  areasChildren: {
    flex: 1,
    textAlign: 'center'
  },
  mT5: {
    marginTop: 5
  },
  mB10: {
    marginBottom: 10
  },
  input: {
    height: 40,
    margin: 5,
    borderWidth: 1,
    padding: 5,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

export default App;