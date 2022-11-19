import React from 'react';
import { 
    Text, 
    View, 
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function Task({data, deleteItem, editItem}) {
    return (
        <View style={style.areaList}>
            <TouchableOpacity style={style.btnTrash} onPress={() => deleteItem(data.key)}>
                <Feather name='trash' color="#fff" size={20} />
            </TouchableOpacity>
            <View style={style.containerfeedback}>
                <TouchableWithoutFeedback style={style.btnTrash} onPress={() => editItem(data)}>
                    <Text style={style.text}> {data.name}</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    areaList: {
        flex: 1,
        margin: 10,
        flexDirection: 'row',
        backgroundColor: '#121212',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
    },
    text: {
        color: '#fff',
        fontSize: 17,
        paddingRight: 10
    },
    containerfeedback:{
        paddingRight: 10,
    },
    btnTrash: {
        marginRight: 10
    }
});
