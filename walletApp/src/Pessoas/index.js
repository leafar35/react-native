import React, { Component } from 'react';
import { 
    Text, 
    View, 
    StyleSheet,
} from 'react-native';

export default class Pessoa extends Component {
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

const style = StyleSheet.create({
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
