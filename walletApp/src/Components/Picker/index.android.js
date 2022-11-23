import React from "react";
import { PickerView } from './styles';
import RNPickerSelect from 'react-native-picker-select';

export default function Picker({onChange, type}){
    return (
        <PickerView>
            <RNPickerSelect 
                style={{
                    inputAndroid:{
                        height: 50,
                        padding: 5,
                        backgroundColor: '#FFF',
                        fontSize: 16
                    }
                }}
                placeholder={{
                    label: 'Selecione o tipo',
                    color: '#FFF',
                    value: null
                }}
                onValueChange={(text) => onChange(text)}
                items={[
                    {label: 'Receita', value:'receita', color: '#222'},
                    {label: 'Despesa', value:'despesa', color: '#222'},
                ]}
                value={type}
            />
        </PickerView>
    )
}