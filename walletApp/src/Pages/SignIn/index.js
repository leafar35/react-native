import React, { useState, useContext } from 'react';
import { AuthContext } from '../../Context/auth';
import { useNavigation } from '@react-navigation/native';
import { Platform, ActivityIndicator, View } from 'react-native';
import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, BoxBackground, FormTitle, AreaLogo, TextLogo, ContainerTitle } from './styles';

export default function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('rafael@gmail.com.br');
  const [password, setPassword] = useState('1234');
  const { Authenticate, token } = useContext(AuthContext);
  
  function handleLogin(){
    Authenticate(email, password);
  }

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

            <SubmitButton onPress={handleLogin}>
                {
                  token ? (
                    <ActivityIndicator size={20} color='#FFF' />
                  ) : (
                    <SubmitText>Acessar</SubmitText>
                  )
                }
            </SubmitButton>

          </BoxBackground>

      </Container>
    </Background>
  );
  
}