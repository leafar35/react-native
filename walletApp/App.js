import React, { Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      pizza: 0,
      pizzas: [
        {id:0, name: 'pizza 1', valor: 39.50},
        {id:1, name: 'pizza 4', valor: 39.50},
        {id:2, name: 'pizza 3', valor: 39.50},
        {id:3, name: 'pizza 6', valor: 39.50},        
      ]
    }
  }

  render(){

    let pizzasitem = this.state.pizzas.map((v,k) => {
      return <Picker.Item key={v.id} value={v.id} label={v.name} />
    });

    return(
      <View style={style.container}>
        <Text style={style.logo}>Menu Pizza</Text>

        <Picker
          selectedValue={this.state.pizza}
          onValueChange={(itemValue, itemIndex) => this.setState({pizza: itemValue})}
        >
          {pizzasitem}
        </Picker>

        <Text style={style.pizzas}>Você escolheu.: {this.state.pizzas[this.state.pizza].name}</Text>
        <Text style={style.pizzas}>R$.: 59,99</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35
  },
  logo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold'
  },
  pizzas: {
    marginTop: 15,
    fontSize: 25,
    textAlign: 'center'
  }
});

export default App;