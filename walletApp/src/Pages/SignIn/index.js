import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import { AuthContext } from '../../context/auths';
import { useNavigation } from '@react-navigation/native';
import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText } from './styles';

export default function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const { user } = useContext(AuthContext);
  const { signIn, loadingAuth } = useContext(AuthContext);

  function handleLogin(){
    signIn(email, password);
  }

  return(
    <Background>
      <Container behavior={Platform.OS == 'ios' ? 'padding' : '' } enabled >
        <Logo source={require('../../img/Logo.png')} />

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
            loadingAuth ? (
              <ActivityIndicator size={20} color='#FFF' />
            ) : (
              <SubmitText>Acessar</SubmitText>
            )
          }
        </SubmitButton>

        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Criar uma conta?</LinkText>
        </Link>

      </Container>
    </Background>
  );
  
}