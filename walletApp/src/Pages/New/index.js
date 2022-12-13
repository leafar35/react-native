import moment from 'moment';
import React, { useState } from 'react';
import Header from '../../Components/Header';
import { Alert, Keyboard } from 'react-native';
import HttpService from '../../services/httpservice';
import RNPickerSelect from "react-native-picker-select";
import { Title, Background, Input, SubmitButton, SubmitText, Content, ContentSelect, LabelText, BoxContent, ContentInputs } from './styled';

export default function New({navigation}) {
  let types = [{label: 'Entrada', value: 'Entrada'},{label: 'Saídas', value: 'Saídas'}]
  const [type, setType] = useState('');
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');

  const placeholder = {
    label: '    Selecione o tipo',
    value: null,
    color: '#9EA0A4',
  }

  async function handleSubmit(){
    if(!type)
      return Alert.alert('Campo Obrigatório', 'Selecione o tipo!');
    if(!value)
      return Alert.alert('Campo Obrigatório', 'Insira o valor!');
    if(!description)
      return Alert.alert('Campo Obrigatório', 'Insira a descrição!');
    let data = {
      type: type,
      date: moment(Date.now()).format('yyyy-MM-DD'),
      amount: value,
      description: description,
      frequency: "Recorrente",
    }
    let response = await HttpService.post('/expanses', data);
    if(response.data.successul)
      return Alert.alert('Sucesso', 'Registro cadastrado com sucesso');
    return Alert.alert('Error', 'Erro ao gravar dados!');
  }

  return(
    <Background>
      <Header navigation={navigation} />
      
      <Content>

        <Title>Nova Entrada</Title>

        <BoxContent>

          <ContentSelect>

            <LabelText>
              Selecione o tipo
            </LabelText>

            <RNPickerSelect
              placeholder={placeholder}
              style={{
                inputIOS: {
                  textAlign: 'left',
                  width: 350,
                  fontSize: 18,
                  paddingVertical: 8,
                  paddingHorizontal: 0,
                  borderWidth: 0,
                  borderBottomWidth: 0.5,
                  backgroundColor: '#FFF',
                  color: 'black',
                  paddingRight: 30,
                  borderRadius: 5,
                  marginTop: 10,
                },
              }}
              value={type}
              onValueChange={(value) => setType(value)}
              items={types}
            />

          </ContentSelect>
          
          <ContentInputs>

            <LabelText>
              Valor Desejado
            </LabelText>

            <Input 
              placeholder='  Valor Desejado'
              KeyboardType="numeric"
              returnkeyType="next"
              onSubmitEditing={() => Keyboard.dismiss() }
              value={value}
              onChangeText={(text) => setValue(text)}
            />
          </ContentInputs>

          <ContentInputs>

            <LabelText>
              Descrição
            </LabelText>

            <Input 
              placeholder='  Descrição'
              KeyboardType="text"
              returnkeyType="next"
              onSubmitEditing={() => Keyboard.dismiss() }
              value={description}
              onChangeText={(text) => setDescription(text)}
            />

          </ContentInputs>

          <ContentInputs>
            <SubmitButton onPress={handleSubmit}>
              <SubmitText>Register</SubmitText>
            </SubmitButton>
          </ContentInputs>

        </BoxContent>

      </Content>

    </Background>
  );
  
}