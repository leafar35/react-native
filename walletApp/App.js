import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
import ContentModal from './src/Components/ContentModal';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      alcohol: 0,
      gasoline: 0,
      bestOption: '',
      modalVisible: false
    }
    this.calc = this.calc.bind(this);
    this.exit = this.exit.bind(this);
  }

  calc(){
    this.setState({modalVisible: true});
    let result = (this.state.alcohol/this.state.gasoline);
    if(result < 0.7)
      return this.setState({bestOption: 'Álcool'});
    return this.setState({bestOption: 'Gásolina'});
  }

  exit(){
    this.setState({modalVisible: false});
  }

  render(){
    return(
      <View style={style.container}>
        <View style={style.areaLogo}>
          <Image 
            style={style.logo}
            source={require('./src/imgs/logo.png')}
          />
          <Text style={style.title}>Qual melhor opção?</Text>
        </View>

        <View style={style.areaInput}>
          <Text style={style.labelInput}>Álcool (preço por litro): </Text>
          <TextInput style={style.input} value={this.state.alcohol} onChangeText={(text) => this.setState({alcohol: text})} />
        </View>

        <View style={style.areaInput}>
          <Text style={style.labelInput}>Gasolina (preço por litro): </Text>
          <TextInput style={style.input} value={this.state.gasoline} onChangeText={(text) => this.setState({gasoline: text})} />
        </View>

        <TouchableOpacity style={style.btncalc} onPress={() => this.calc()}>
          <Text style={style.textbtn}>Calcular</Text>
        </TouchableOpacity>

        <Modal transparent={false} animationType='slide' visible={this.state.modalVisible}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ContentModal state={this.state} fechar={this.exit}></ContentModal>
          </View>
        </Modal>

      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  areaLogo: {
    alignItems: 'center',
  },
  logo: {
    marginTop: 100
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
  areaInput: {
    marginTop: 35,
  },
  labelInput: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 5
  },
  input:{
    height: 40,
    margin: 5,
    borderWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 5
  },
  btncalc: {
    marginTop: 35,
    backgroundColor: "#FF4500",
    borderRadius: 10,
    paddingVertical: 10,
  },
  textbtn: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

export default App;