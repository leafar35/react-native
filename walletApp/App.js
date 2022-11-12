import React, { Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
} from 'react-native';
import Conversor from './src/Components/Conversor';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return(
      <View style={style.container}>
        <Conversor currenyA='USD' currenyB='BR' />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default App;