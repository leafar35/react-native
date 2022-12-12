import React from 'react';
import { Container, Title, MessageFooter, Img, SubTitle } from './styled';

export default function WalletBox({color, img, title, value}) {

    return (
        <Container color={color}>
            <Title>{title}</Title>
            <SubTitle>R$ {value.toFixed(3)}</SubTitle>
            <MessageFooter>Atualizado com base em Entradas e Saídas</MessageFooter>
            <Img source={img} />
        </Container>
    );
    
}
