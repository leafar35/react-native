import React, { Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet, 
  TextInput, 
  Button, 
  Image,
  TouchableOpacity
} from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      textPhrase: 'Frase 1',
      img: require('./src/biscoito.png')
    };

    this.break = this.break.bind(this);

    this.phrases = [
      'frase 1',
      'frase 2',
      'frase 3',
      'frase 4',
      'frase 5',
      'frase 6',
      'frase 7',
    ];
  }

  break(){
    let number = Math.floor(Math.random() * this.phrases.length);
    this.setState({
      textPhrase: '"' + this.phrases[number] + '"',
      img: require('./src/biscoitoAberto.png')
    });
  }

  render(){
    return(
      <View style={style.container}>
        <Image 
          source={this.state.img}
          style={style.img} 
        />

        <Text style={style.text}> {this.state.textPhrase} </Text>

        <TouchableOpacity style={style.btn} onPress={this.break}>
          <View style={style.btnArea}>
            <Text style={style.textbtn}>Abrir Biscoito</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  img: {
    width: 250,
    height:250,
  },
  text: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  btn: {
    width: 250,
    height: 50,
    borderWidth: 2,
    borderColor:'#dd7b22',
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b2'
  }
});

export default App;