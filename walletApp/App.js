import React, { Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  Switch,
  TextInput,
  FlatList,
  ActivityIndicator
} from 'react-native';
import api from './src/Services/api';
import Movies from './src/Components/Movies';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      movies: [],
      load: true,
    }
  }

  async componentDidMount(){
    const response = await api.get('r-api/?api=filmes');
    this.setState({
      movies: response.data,
      load: false,
    })
  }

  render(){

    if(this.state.load){
      return (
        <View style={style.load}>
          <ActivityIndicator color='#09A6FF' size={70} />
        </View>
      )
    }

    return(
      <View style={style.container}>
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={this.state.movies}
          renderItem={ ({item}) => <Movies data={item} /> }
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 45
  },
  load:{
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;