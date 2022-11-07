import React, { Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  Switch
} from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      status: false
    }
  }

  render(){
    return(
      <View style={style.container}>


        <Switch 
          value={this.state.status}
          onValueChange={(valueChnage) => this.setState({status: valueChnage})}
        />

        <Text>
          {this.state.status ? 'Ativo' : 'Inativo'}
        </Text>

      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80
  }
});

export default App;