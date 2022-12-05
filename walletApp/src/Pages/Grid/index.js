import React from 'react';
import { FlatList } from 'react-native';
import GridItem from '../../Components/Grid';
import Header from '../../Components/Header';
import { Background, ContainerGrid } from './styled';

export default function Grid() {

  const rows = [
    {
      "id": 4,
      "description": "Uma bala",
      "amount": 1.5,
      "type": "Saída",
      "frequency": "Recorrente",
      "date": "2022-05-01T00:00:00.000Z"
    },
    {
      "id": 5,
      "description": "Uma bala de prata",
      "amount": 1.5,
      "type": "Saída",
      "frequency": "Recorrente",
      "date": "2022-05-01T00:00:00.000Z"
    },
    {
      "id": 6,
      "description": "Uma bala de prata",
      "amount": 1.5,
      "type": "Saída",
      "frequency": "Recorrente",
      "date": "2022-05-01T00:00:00.000Z"
    }
  ];

  return(
    <Background>
      <Header />
      <GridItem tagcolor='red' title='yna bla' data='21/06/2015' value='25,00' />
      <ContainerGrid>
        <FlatList
          keyExtractor={item => item.id}
          data={rows}
          renderItem={({item}) => <GridItem tagcolor={(item.type == 'Saída' ? 'red' : 'blue')} title={item.description} data={item.date} value={item.amount.toFixed(2)} />}
        />
      </ContainerGrid>
    </Background>
  );
  
}