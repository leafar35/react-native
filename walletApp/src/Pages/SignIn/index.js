import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, BoxBackground, FormTitle, AreaLogo, TextLogo, ContainerTitle } from './styles';

export default function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  
  return(
    <Background>
      <Container behavior={Platform.OS == 'ios' ? 'padding' : '' } enabled >

          <AreaLogo>
            <Logo source={require('../../imgs/logo.png')} />
            <TextLogo>Minha Carteira</TextLogo>
          </AreaLogo>

          <BoxBackground>

            <ContainerTitle>
              <FormTitle>
                Entrar
              </FormTitle>
            </ContainerTitle>

            <AreaInput>
              <Input 
                placeholder='E-mail'
                autoCorrect={false}
                autoCaptalize='none'
                value={email}
                onChangeText={(email) => setEmail(email)}
              />
            </AreaInput>

            <AreaInput>
              <Input 
                placeholder='Senha'
                autoCorrect={false}
                autoCaptalize='none'
                value={password}
                onChangeText={(password) => setPassword(password)}
                secureTextEntry={true}
              />
            </AreaInput>

            <SubmitButton>
                <SubmitText>Acessar</SubmitText>
            </SubmitButton>

          </BoxBackground>

      </Container>
    </Background>
  );
  
}