import React, { Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard
} from 'react-native';
import api from '../../Services/api';

export default class Conversor extends Component {

    constructor(props){
        super(props);
        this.state = {
            currenyA: props.currenyA,
            currenyB: props.currenyB,
            currenyValueB: 0,
            valueConvert: 0,
        };
        this.convert = this.convert.bind(this);
    }

    async convert(){
        let fromTo = this.state.currenyA + '_' + this.state.currenyB;
        const response = await api.get(`convert?q=${fromTo}&compact=ultra&apiKey=7c5ef455b88d735bc6ad`);
        let content = response.data[fromTo];
        let result = (content * parseFloat(this.state.currenyValueB));
        this.setState({
            valueConvert: result.toFixed(2)
        });
        Keyboard.dismiss();
    }

    render(){
        return (
            <View style={style.container}>

                <Text style={style.title}>{this.props.currenyA} para {this.props.currenyB}</Text>
                <TextInput 
                    placeholder='Valor a ser convertido'
                    style={style.input}
                    onChangeText={(currenyValueB) => this.setState({currenyValueB: currenyValueB})}
                    keyboardType='numeric'
                />

                <TouchableOpacity style={style.areabtn} onPress={this.convert}>
                    <Text style={style.extbtn}>
                        Conversor
                    </Text>
                </TouchableOpacity>

                <Text style={style.valueconvert}>
                    {this.state.valueConvert === 0 ? '' : this.state.valueConvert}
                </Text>

            </View>
        );
    }

}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
    },
    input: {
        width: 280,
        height: 45,
        backgroundColor: '#ccc',
        textAlign: 'center',
        marginTop: 15,
        fontSize: 20,
        color: '#000',
        borderRadius: 5,
    },
    areabtn: {
        width: 150,
        height: 45,
        backgroundColor: '#FF0000',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        borderRadius: 5
    },
    extbtn: {
        fontSize: 17,
        fontWeight: 'bold',
        color:'#fff'
    },
    valueconvert:{
        fontSize: 30,
        fontWeight: 'bold',
        color:'#000',
        marginTop: 15,
    }
})