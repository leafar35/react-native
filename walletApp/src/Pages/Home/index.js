import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/auths';
import Header from '../../Components/Header';
import { Background, Container, Name, Saldo, Title, List } from './styles';
import HistoricList from '../../Components/HistoricList';

export default function Home() {
  
  const { user } = useContext(AuthContext);
  const [historic, setHistoric] = useState([
    {key: '1', type: 'receita', value: 1200},
    {key: '2', type: 'despesa', value: 800},
    {key: '3', type: 'receita', value: 500},
    {key: '4', type: 'despesa', value: 20},
  ]);

  return(
    <Background>
      <Header />
      <Container>
        <Name>{user && user.name}</Name>
        <Saldo>R$ 123,00</Saldo>
      </Container>

      <Title>ULtimas movimentações</Title>
      <List 
        showsVerticalScrollIndicator={false}
        data={historic}
        keyExtractor={item => item.key}
        renderItem={({item}) => ( <HistoricList data={item} /> ) }
      />
    </Background>
  );
  
}