import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/auths';
import { Platform, ActivityIndicator } from 'react-native';
import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText } from '../SignIn/styles';

export default function SignUp() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp, loadingAuth } = useContext(AuthContext);

  function handleSignUp(){
    signUp(email, password, name);
  }

  return(
    <Background>
      <Container behavior={Platform.OS == 'ios' ? 'padding' : '' } enabled >
        
        <AreaInput>
          <Input 
            placeholder='name'
            autoCorrect={false}
            autoCaptalize='none'
            value={name}
            onChangeText={(name) => setName(name)}
          />
        </AreaInput>

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

        <SubmitButton onPress={handleSignUp}>
          {
            loadingAuth ? (
              <ActivityIndicator size={20} color='#FFF' />
            ) : (
              <SubmitText>Cadastrar</SubmitText>
            )
          }
        </SubmitButton>

      </Container>
    </Background>
  );
  
}