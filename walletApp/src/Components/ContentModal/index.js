import React, { Component } from 'react';
import { 
  Text, 
  View, 
  Image,
  StyleSheet,
  TouchableOpacity,
  Switch,
  TextInput,
  Button,
  Modal
} from 'react-native';

export default class ContentModal extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return(
        <View style={style.container}>

            <View style={style.areaLogo}>
                <Image 
                    style={style.logo}
                    source={require('../../imgs/gas.png')}
                />
                <Text style={style.title}>Compensa usar {this.props.state.bestOption}</Text>
            </View>

            <View>
                <Text style={style.titleInfo}>Com os preços:</Text>
                <Text style={style.textInfo}>Álcool: R$ {this.props.state.alcohol}</Text>
                <Text style={style.textInfo}>Gasolina: R$ {this.props.state.gasoline}</Text>
            </View>

            <TouchableOpacity style={style.btnrecalc} onPress={() => this.props.fechar()}>
                <Text style={style.textbtn}>Calcular novamente</Text>
            </TouchableOpacity>

        </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#000',
    alignItems: 'center',
  },
  logo: {
    marginTop: 100
  },
  areaLogo: {
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    color: 'green',
    fontWeight: 'bold',
  },
  titleInfo: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  textInfo: {
    color: '#fff',
    marginTop: 15,
  },
  btnrecalc: {
    marginTop: 15,
    marginBottom: 15,
    color: "#FF4500",
    borderColor: "#FF4500",
    backgroundColor: '#000',
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
  },
  textbtn: {
    fontSize: 18,
    color: "#FF4500",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
});