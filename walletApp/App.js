import React, { Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
} from 'react-native';
import Slider from '@react-native-community/slider';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      value: 0
    }
  }

  render(){
    return(
      <View style={style.container}>


        <Slider 
          minimumValue={0}
          maximumValue={100}
          onValueChange={(valueSelected) => this.setState({value: valueSelected})}
          value={this.state.value}
          minimumTrackTintColor='#00FF00'
          maximumTrackTintColor='#FF0000'
        />

        <Text style={{textAlign: 'center', fontSize: 30}}>
          {this.state.value.toFixed(0)} KG
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