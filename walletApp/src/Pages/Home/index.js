import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/auths';
import Header from '../../Components/Header';
import { Background, Container, Name, Saldo, Title, List, Area } from './styles';
import HistoricList from '../../Components/HistoricList';
import firebase from '../../connection/index';
import { format, isBefore, isPast } from 'date-fns';
import { Alert, Platform, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DatePicker from '../../Components/DatePicker';

export default function Home() {
  
  const { user } = useContext(AuthContext);
  const [historic, setHistoric] = useState([]);
  const [saldo, setSaldo] = useState(0);
  const [newDate, setNewDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const uid = user && user.uid;

  useEffect(() => {

    async function loadlisting(){

      await firebase.database().ref('usuarios').child(uid).on('value', (snapshot) => {
        setSaldo(snapshot.val().saldo);
      });

      await firebase.database().ref('historic').child(uid).orderByChild('date').equalTo(format(newDate,'dd/MM/yyyy'))
      .limitToLast(10).on('value',(snapshot) =>{
        setHistoric([]);
        snapshot.forEach(item => {
          let list = {
            key: item.key,
            type: item.val().type,
            value: item.val().value,
            date: item.val().date,
          }
          setHistoric(oldArray => [...oldArray, list].reverse());
        });
      });

    }

    loadlisting();

  },[newDate]);

  function handleDelete(item){
    const [diaitem, mesItem, anoItem] = item.date.split('/');
    const dataItem = new Date(`${anoItem}/${mesItem}/${diaitem}`);
    const [diacurrent, mescurrent, anocurrent] = format(new Date(),'dd/MM/yyyy').split('/');
    const dateCurrent = new Date(`${anocurrent}/${mescurrent}/${diacurrent}`);

    if(isBefore(dataItem, dateCurrent)){
      return alert('Você não pode deletar o registro antigo!');
    }
    Alert.alert(
      'Cuidado Atenção!',
      `Você deseja excluir ${item.type} - valor.: ${item.value}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => handleDeleteSuccess(item)
        }
      ]
    )
  }

  async function handleDeleteSuccess(item){
    await firebase.database().ref('historic')
    .child(uid).child(item.key).remove().then(async () => {
      let saldoatual = saldo;
      item.type == 'despesa' ? saldoatual += parseFloat(item.value) : saldoatual -= parseFloat(item.value);
      await firebase.database().ref('usuarios').child(uid).child('saldo').set(saldoatual);
    })
    .catch(err => {
      alert(err.code);
    })
  }

  function handleShowPiker(){
    setShow(true);
  }

  function handleClose(){
    setShow(false);
  }

  function onChange(date){
    setShow(Platform.OS == 'ios');
    setNewDate(date);
  }

  return(
    <Background>
      <Header />
      <Container>
        <Name>{user && user.name}</Name>
        <Saldo>R$ {saldo.toFixed(2)}</Saldo>
      </Container>

      <Area>
        <TouchableOpacity onPress={handleShowPiker}>
            <Icon name='event' color='#FFF' size={20} />
        </TouchableOpacity>
        <Title>Ultimas movimentações</Title>        
      </Area>

      <List 
        showsVerticalScrollIndicator={false}
        data={historic}
        keyExtractor={item => item.key}
        renderItem={({item}) => ( <HistoricList data={item} deleteItem={handleDelete} /> ) }
      />

      {show && (
        <DatePicker
          onClose={handleClose}
          date={newDate}
          onChange={onChange}
        />
      )}

    </Background>
  );
  
}