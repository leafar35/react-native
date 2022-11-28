import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import ChartBar from '../../Components/ChartBar';
import ChartLine from '../../Components/ChartLine';
import ChartPie from '../../Components/ChartPie';
import Header from '../../Components/Header';
import WalletBox from '../../Components/WalletBox';
import { Background, TextTitle, Container, ContainerBoxs } from './styled';

const balance = require('../../imgs/dolar.png');
const upImg = require('../../imgs/arrow-up.png');
const downImg = require('../../imgs/arrow-down.png');

export default function Dashboard() {

  return(
    <Background>
      <Header />
      <Container>
        <TextTitle>Dashboard</TextTitle>
        <ScrollView>
          <ContainerBoxs>          
            <WalletBox color='#4E41F0' img={balance} title='Saldo' value={1500} />
            <WalletBox color='#F7931B' img={upImg} title='Entradas' value={50} />
            <WalletBox color='#E44C4E' img={downImg} title='Saídas' value={50} />
            <ChartLine />
            <ChartBar title='Saídas' />
            <ChartBar title='Entradas' />
          </ContainerBoxs>
        </ScrollView>
      </Container>
    </Background>
  );
  
}