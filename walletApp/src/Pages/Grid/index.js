import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import Header from '../../Components/Header';
import GridItem from '../../Components/Grid';
import Filter from '../../Components/Filter';
import HttpService from '../../services/httpservice';
import { Background, ContainerGrid, Legend, ContainerLegends, Legends, TagColorLegend, MessageGrid } from './styled';

export default function Grid({navigation,route}) {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function handleExpanses(){
      let response = await HttpService.get('/expanses');
      let type = (route.params?.title === 'Saídas') ? 'Saída' : 'Entrada';
      setRows(response.data.data.filter(item => item.type === type));
    }
    handleExpanses();
  },[]);

  return(
    <Background>
      <Header navigation={navigation} />
      <Filter title={route.params?.title} />
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
        {rows.length ? (
          <FlatList
            keyExtractor={item => item.id}
            data={rows}
            renderItem={({item}) => <GridItem tagcolor={(item.type == 'Saída' ? '#F7931B' : 'blue')} title={item.description} data={item.date} value={item.amount.toFixed(2)} />}
          />
        )
        :
          (  
            <MessageGrid>Nenhuma Entrada</MessageGrid>
          )
        }
      </ContainerGrid>
    </Background>
  );
  
}