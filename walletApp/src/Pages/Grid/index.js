import React from 'react';
import { FlatList } from 'react-native';
import GridItem from '../../Components/Grid';
import Header from '../../Components/Header';
import { Background, ContainerGrid, Title, Legend, ContainerLegends, Legends, TagColorLegend } from './styled';

export default function Grid({route}) {
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
      <Title>{route.params?.title}</Title>
      <ContainerLegends>
        <Legends>
          <Legend>
            Eventuais
          </Legend>
          <TagColorLegend tagcolor='blue' />
        </Legends>
        <Legends>
          <Legend>
            Recorrentes
          </Legend>
          <TagColorLegend tagcolor='#F7931B' />
        </Legends>
      </ContainerLegends>
      <ContainerGrid>
        <FlatList
          keyExtractor={item => item.id}
          data={rows}
          renderItem={({item}) => <GridItem tagcolor={(item.type == 'Saída' ? '#F7931B' : 'blue')} title={item.description} data={item.date} value={item.amount.toFixed(2)} />}
        />
      </ContainerGrid>
    </Background>
  );
  
}