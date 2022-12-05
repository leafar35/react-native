import React from 'react';
import moment from 'moment';
import { Container, Title, SubTitle, ValueFormat, Colortag, ContainerTitles } from './styled';

export default function GridItem({tagcolor, title, data, value}) {

    return (
        <Container>
            <Colortag tagcolor={tagcolor}></Colortag>
            <ContainerTitles>
                <Title>{title}</Title>
                <SubTitle>{moment(data, 'yyyy-MM-DD').format('DD/MM/yyyy')}</SubTitle>
            </ContainerTitles>
            <ValueFormat>{value}</ValueFormat>
        </Container>
    );    
}