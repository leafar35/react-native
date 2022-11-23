import React, { useState } from "react";
import Header from '../../Components/Header';
import { SafeAreaView, Keyboard, TouchableWithoutFeedback } from "react-native";
import { Background, Input, SubmitButton, SubmitText } from './styles';
import Picker from "../../Components/Picker/index.ios";


export default function New(){
    const [value, setValue] = useState('');
    const [type, setType] = useState('receita');

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss() }>
            <Background>
                <Header />

                <SafeAreaView style={{alignItems: 'center'}}>

                    <Input 
                        placeholder='Valor Desejado'
                        KeyboardType="numeric"
                        returnkeyType="next"
                        onSubmitEditing={() => Keyboard.dismiss() }
                        value={value}
                        onChangeText={(text) => setValue(text)}
                    />

                    <Picker onChange={setType} type={type} />

                    <SubmitButton>
                        <SubmitText>Register</SubmitText>
                    </SubmitButton>
                </SafeAreaView>

            </Background>
        </TouchableWithoutFeedback>
    );

}