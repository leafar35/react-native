import React from 'react';
import { Container, Profile, Welcome, UserName } from './styles';

export default function Header() {

    return (
        <Container>
            <Profile>
                <Welcome>Olá</Welcome>
                <UserName>Rafael Vianini</UserName>
            </Profile>
        </Container>
    );
  
}