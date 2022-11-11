import React, { Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
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
        <View style={{backgroundColor: '#292929', width: '100%', height: 350, borderRadius: 15}}>
            <Text style={{paddingTop: 15, color: '#fff', fontSize: 28, marginTop: 55, textAlign: 'center'}}>Seja bem vindo!</Text>
            <Button title='Sair' onPress={this.props.fechar} />
        </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80
  },  
});