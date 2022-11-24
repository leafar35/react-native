import React, { useState, useContext } from "react";
import Header from '../../Components/Header';
import { SafeAreaView, Keyboard, TouchableWithoutFeedback, Alert } from "react-native";
import { Background, Input, SubmitButton, SubmitText } from './styles';
import Picker from "../../Components/Picker/index.ios";
import firebase from '../../connection/index';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/auths';


export default function New(){
    const navigation = useNavigation();
    const [value, setValue] = useState('');
    const [type, setType] = useState('receita');
    const { user: current } = useContext(AuthContext);

    function handleSubmit(){
        Keyboard.dismiss();
        if(!value || !type){
            return alert('Informe o valor e selecione a receita!');
        }
        if(isNaN(parseFloat(value))){
            return alert('Valor informado não é um número');
        }
        Alert.alert(
            'Confirmando dados', 
            `${type} - ${parseFloat(value)}`,
            [
                {
                    text: 'Cancelar',
                    style:'cancel'
                },
                {
                    text: 'Continuar',
                    onPress: () => handleAdd()
                },
            ]
        )
    }

    async function handleAdd(){
        let uid = current.uid;
        let index = await firebase.database().ref('historic').child(uid).push().key;
        await firebase.database().ref('historic').child(uid).child(index).set({
            type: type,
            value: parseFloat(value),
            date: format(new Date(), 'dd/MM/yyyy')
        }).then(() => {
            Alert.alert('Registro adicionado com sucesso!');
        }).catch(err => {
            Alert.alert(`Não foi possivel adicionar o registro, tente novamente mais tarde! ${err.code}`);
        });
        let user = firebase.database().ref('usuarios').child(uid);
        await user.once('value').then((snapshot) => {
            let saldo = parseFloat(snapshot.val().saldo);
            if(type === 'despesa'){
                saldo -= parseFloat(value);
                user.child('saldo').set(saldo);
                return;
            }
            saldo += parseFloat(value);
            user.child('saldo').set(saldo);
        });
        setValue('');
        Keyboard.dismiss();
        navigation.navigate('Home');
    }

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

                    <SubmitButton onPress={handleSubmit}>
                        <SubmitText>Register</SubmitText>
                    </SubmitButton>
                </SafeAreaView>

            </Background>
        </TouchableWithoutFeedback>
    );

}