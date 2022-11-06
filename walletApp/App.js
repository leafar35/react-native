import React, { Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      number: 0,
      textButton: 'Começar',
      lastTime: 0
    }

    this.time = null;
    this.start = this.start.bind(this);
    this.clear = this.clear.bind(this);

  }

  start(){

    if(this.time !== null){
      this.setState({textButton: 'Começar'});
      clearInterval(this.time);
      return this.time = null;
    }

    this.time = setInterval(() => {
      this.setState({textButton: 'Parar'});
      this.setState({number: this.state.number + 0.01});
    },100)
  }

  clear(){
    if(this.time !== null){
      this.setState({lastTime: this.state.number})
      this.setState({textButton: 'Começar'});
      clearInterval(this.time);
      this.time = null;
    }
    this.setState({number: 0});
  }

  render(){
    return(
      <View style={style.container}>        

        <Image 
          source={require('./src/cronometro.png')} 
          style={style.stopwatch}
        />  

        <Text style={style.timer}>{this.state.number.toFixed(1)}</Text>

        <View style={style.btnArea}>

          <TouchableOpacity style={style.btn} onPress={this.start}>
            <Text style={style.btnText}>{this.state.textButton}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.btn} onPress={this.clear}>
            <Text style={style.btnText}>LIMPAR</Text>
          </TouchableOpacity>

        </View>

        <View style={style.areaLast}>
          <Text style={style.textTime}>Ultimo Tempo {this.state.lastTime.toFixed(2)}</Text>
        </View>

      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer: {
    marginTop: -160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  areaLast: {
    marginTop: 40,    
  },
  textTime: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#fff'
  }
});

export default App;