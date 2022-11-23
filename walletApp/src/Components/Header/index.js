import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { Container, ButtonMenu } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Header(){
    const navigation = useNavigation();

    return (
        <Container>
            <ButtonMenu onPress={() => navigation.toggleDrawer() }>
                <Feather name='menu' color="#FFF" size={30} />
            </ButtonMenu>
        </Container>
    )
}