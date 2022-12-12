import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import ChartBar from '../../Components/ChartBar';
import ChartLine from '../../Components/ChartLine';
import Filter from '../../Components/Filter';
import Header from '../../Components/Header';
import WalletBox from '../../Components/WalletBox';
import HttpService from '../../services/httpservice';
import { Background, Container, ContainerBoxs } from './styled';

const balanceImg = require('../../imgs/dolar.png');
const upImg = require('../../imgs/arrow-up.png');
const downImg = require('../../imgs/arrow-down.png');

export default function Dashboard({navigation}) {
  const [balance, setBalance] = useState(0);
  const [entrance, setEntrance] = useState(0);
  const [outputs, setOutputs] = useState(0);
  
  const [entranceData, setEntranceData] = useState([]);
  const [outputsData, setOutputsData] = useState([]);

  useEffect(() => {
    async function handleExpanses(){
      let totaloutputs = 0;
      let totalentrance = 0;
      let response = await HttpService.get('/expanses');
      setEntranceData(response.data.data.filter(element => element.type === 'Entrada').map((item) => {
        return item.amount
      }));
      response.data.data.filter(element => element.type === 'Entrada').forEach((item) => {
        return totalentrance = parseFloat(totaloutputs)+parseFloat(item.amount);
      });
      setOutputsData(response.data.data.filter(element => element.type === 'Saída').map((item) => {
        return item.amount
      }));
      response.data.data.filter(element => element.type === 'Saída').forEach((item) => {
        return totaloutputs = parseFloat(totaloutputs)-parseFloat(item.amount);
      });
      setBalance(parseFloat(totalentrance) - parseFloat(totaloutputs));
      setEntrance(parseFloat(totalentrance));
      setOutputs(parseFloat(totaloutputs));
    }
    handleExpanses();
  },[]);

  return(
    <Background>
      <Header navigation={navigation} />
      <Container>
        <ScrollView>
          <Filter title='Dashboard' />
          <ContainerBoxs>          
            <WalletBox color='#4E41F0' img={balanceImg} title='Saldo' value={balance} />
            <WalletBox color='#F7931B' img={upImg} title='Entradas' value={entrance} />
            <WalletBox color='#E44C4E' img={downImg} title='Saídas' value={outputs} />
            <ChartLine entrances={entranceData} outputs={outputsData} />
            <ChartBar title='Saídas' entrances={entranceData} outputs={outputsData} />
            <ChartBar title='Entradas' entrances={entranceData} outputs={outputsData} />
          </ContainerBoxs>
        </ScrollView>
      </Container>
    </Background>
  );
  
}