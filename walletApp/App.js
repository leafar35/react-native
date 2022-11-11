import { Picker } from '@react-native-picker/picker';
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
import ContentModal from './src/Components/ContentModal';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      modalVisible: false
    };
    this.enter = this.enter.bind(this);
    this.exit = this.exit.bind(this);
  }

  enter(){
    this.setState({
      modalVisible: true
    })
  }

  exit(){
    this.setState({
      modalVisible: false
    })
  }

  render(){
    return(
      <View style={style.container}>

        <Button title='Entrar' onPress={this.enter} />

        <Modal transparent={true} animationType='slide' visible={this.state.modalVisible}>
          <View style={{margin: 15, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ContentModal fechar={() => this.exit() }></ContentModal>
          </View>
        </Modal>

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

export default App;