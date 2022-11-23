import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { Container, Tipo, IconVIew, TipoText, ValorText } from './styles';

export default function HistoricList({data}){

    return (
        <Container>
            <Tipo>
                <IconVIew type={data.type}>
                    <Feather 
                        name={data.type == 'despesa' ? 'arrow-down'  : 'arrow-up' }
                        color='#FFF'
                        size={30} 
                    />
                    <TipoText>{data.type}</TipoText>
                </IconVIew>
            </Tipo>
            <ValorText>R$ {data.value.toFixed(2)}</ValorText>
        </Container>
    )
}