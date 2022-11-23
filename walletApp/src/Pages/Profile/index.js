import React, { useContext } from "react";
import Header from "../../Components/Header";
import { AuthContext } from '../../context/auths';
import { useNavigation } from '@react-navigation/native';
import { Container, Name, NewLink, NewText, Logout, LogoutText } from './styles';

export default function Profile(){
    
    const navigation = useNavigation();
    const { user, signOut } = useContext(AuthContext);

    return (
        <Container>
            <Header />
            <Name>
                { user && user.name }
            </Name>

            <NewLink onPress={() => navigation.navigate('Registrar') }>
                <NewText>Registrar Gastos</NewText>
            </NewLink>

            <Logout onPress={() => signOut() }>
                <LogoutText>Sair</LogoutText>
            </Logout>

        </Container>
    );

}