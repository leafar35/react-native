import React from 'react';
import { 
    Text, 
    View, 
    StyleSheet,
} from 'react-native';

export default function List({data}) {
    return (
        <View style={style.areaList}>
            <Text style={style.text}> Nome.: {data.nome}</Text>
            <Text style={style.text}> Idade.: {data.idade}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    areaList: {
        flex: 1,
        marginTop: 10,
        marginBottom: 5,
        padding: 10,
        backgroundColor: '#121212',
    },
    text: {
        color: '#fff',
        fontSize: 17
    }
});
