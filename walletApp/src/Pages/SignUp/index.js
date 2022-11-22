import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/auths';
import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText } from '../SignIn/styles';

export default function SignUp() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp } = useContext(AuthContext);

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
          />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>

      </Container>
    </Background>
  );
  
}