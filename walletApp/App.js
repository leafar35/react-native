import React, { Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

class App extends Component {

  render(){
    return(
      <View style={style.container}>

        <ScrollView>
          <View style={style.box1}></View>
          <View style={style.box2}></View>
          <View style={style.box3}></View>
          <View style={style.box4}></View>
        </ScrollView>

      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  box1: {
    backgroundColor: 'red',
    height: 250,
  },
  box2: {
    backgroundColor: 'green',
    height: 250,
  },
  box3: {
    backgroundColor: 'yellow',
    height: 250,
  },
  box4: {
    backgroundColor: 'blue',
    height: 250,
  }
});

export default App;