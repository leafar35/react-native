import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Profile, Welcome, UserName } from './styles';

export default function Header() {

    return (
        <Container>
            <TouchableOpacity>
                
            </TouchableOpacity>
            <Profile>
                <Welcome>Olá</Welcome>
                <UserName>Rafael Vianini</UserName>
            </Profile>
        </Container>
    );
  
}