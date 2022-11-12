import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class Movies extends Component {

    render(){
        const {nome, foto} = this.props.data;
        return (
            <View>

                <View style={style.card}>

                    <Text style={style.title}>{this.props.data.nome}</Text>
                    <Image 
                        source={{uri: this.props.data.foto}}
                        style={style.preview}
                    />

                    <View style={style.areaButton}>
                        <TouchableOpacity style={style.btn} onPress={() => console.log('tela') }>
                            <Text style={style.textbtn}>Leia Mais</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        )
    }

}

const style = StyleSheet.create({
    card: {
        shadowColor: '#000',
        backgroundColor: '#fff',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        margin: 15,
        shadowRadius: 5,
        borderRadius: 5,
        elevation: 3
    },
    title: {
        fontSize: 18,
        padding: 15,
    },
    preview: {
        height: 250,
        zIndex: 9,
    },
    areaButton: {
        alignItems: 'flex-end',
        marginTop: -40,
        zIndex: 9,
    },
    btn: {
        width: 100,
        backgroundColor: '#09A6FF',
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    textbtn: {
        textAlign: 'center',
        color: '#fff'
    }
  });
  