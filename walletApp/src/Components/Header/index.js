import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Profile, Welcome, UserName, ContainerButtom } from './styles';

export default function Header({navigation}) {
    return (
        <Container>
            <ContainerButtom>
                <TouchableOpacity style={{marginLeft: 10, backgroundColor: '#F7931B', padding: 4, borderRadius: 5}} onPress={() => navigation.openDrawer() }>
                    <Icon name='bars' size={30} color="white" />
                </TouchableOpacity>
            </ContainerButtom>
            <Profile>
                <Welcome>Olá</Welcome>
                <UserName>Rafael Vianini</UserName>
            </Profile>
        </Container>
    );
  
}