import React, { Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      feed: [
        {id:1, name: 'Rafael', idade: 35, email: 'Vianini@unochapeco.edu.br'},
        {id:2, name: 'Rafael 1', idade: 35, email: 'Vianini@unochapeco.edu.br'},
        {id:3, name: 'Rafael 2', idade: 35, email: 'Vianini@unochapeco.edu.br'},
        {id:4, name: 'Rafael 4', idade: 35, email: 'Vianini@unochapeco.edu.br'},
      ]
    }
  }

  render(){
    return(
      <View style={style.container}>

        <FlatList
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          renderItem={({item}) =>  <Pessoa data={item} />}
        >

        </FlatList>
      
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  areaPerson: {
    backgroundColor: '#222',
    height: 200,
    marginBottom: 15
  },
  textPerson: {
    color: '#fff',
    fontSize: 20
  }
});

export default App;

class Pessoa extends Component {
  render(){
    return (
      <View style={style.areaPerson}>
        <Text style={style.textPerson}>Nome.: {this.props.data.name}</Text>
        <Text style={style.textPerson}>Idade.: {this.props.data.idade}</Text>
        <Text style={style.textPerson}>E-mail.: {this.props.data.email}</Text>
      </View>
    );
  }
}