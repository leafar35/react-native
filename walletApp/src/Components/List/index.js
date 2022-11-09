import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default class List extends Component {

    constructor(props){
        super(props);
        this.state = {
            feed: this.props.data
        }
    }

    render(){
        return (
            <View>
                <Text>Feed</Text>
            </View>
        )
    }

}
