import React,{useState, useEffect, useRef} from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Keyboard,
} from 'react-native';
import Login from './src/Components/Login';
import Task from './src/Components/Task';
import firebase from './src/Connects/firebaseConnection';
import Feather from 'react-native-vector-icons/Feather';

export default function App(){
  const inputRef = useRef(null);
  const [user, setUser] = useState(null);
  const [newTesk, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [key, setkey] = useState('');
  
  useEffect(() => {

    function getUser(){
      if(!user){
        return;
      }
      firebase.database().ref('tasks').child(user).once('value', (snapeshot) => {
        
        setTasks([]);
        snapeshot?.forEach(element => {
          let data = {
            key: element.key,
            name: element.val().name
          }
          setTasks(oldTask => [...oldTask, data]);
        });

      });
    }

    getUser();

  }, [user]);

  function handleDelete(key){
    let deleteTasks = firebase.database().ref('tasks').child(user);
    deleteTasks.child(key).remove()
    .then(() => {
      const filter = tasks.filter(item => item.key !== key);
      setTasks(filter);
      alert('Removido som sucesso')
    })
    .catch(e => {
      alert('Não foi possivel tente novamente mais tarde!!');
    });
  }

  function handleEdit(item){
    setkey(item.key);
    setNewTask(item.name);
    inputRef.current.focus();
  }

  function handleAdd(){
    if(!newTesk.trim()){
      return alert('Digite alguma coisa!');
    }
    if(key.trim()){
      let tasksEdit = firebase.database().ref('tasks').child(user).child(key);
      return tasksEdit.update({name: newTesk}).then(() => {
        const index = tasks.findIndex(item => item.key === key);
        tasks[index].name = newTesk;
        setkey('');
        setNewTask('');
        Keyboard.dismiss();
        alert('Tarefa atualizada!');
      }).catch(e => {
        console.log(e);
        alert('Tente novamente mais tarde!');
      });
    }
    let tasksEdit = firebase.database().ref('tasks').child(user);
    let keyItem = tasksEdit.push().key;
    tasksEdit.child(keyItem).set({
      name: newTesk
    }).then((event) => {
      const data = {
        key: keyItem,
        name: newTesk
      }
      setTasks(oldTask => [...oldTask, data]);
    }).catch(e => {
      alert('Tente novamente mais tarde!');
    });
    Keyboard.dismiss();
    setNewTask('');
  }

  function cancelEdit(){
    setkey('');
    setNewTask('');
    Keyboard.dismiss();
  }

  if(!user){
    return <Login changeStatus={(user) => setUser(user)} />
  }
  
  return(
    <SafeAreaView style={style.container}>

      {key.length > 0 && (

        <View style={style.alert}>
          <TouchableOpacity onPress={cancelEdit}>
            <Feather name='x-circle' size={20} color='#ff0000' />
          </TouchableOpacity>
          <Text style={style.textalert}>Você está editando essa tarefa!</Text>
        </View>

      )}

      <View style={style.containerc}>

        <TextInput 
          style={style.input} 
          placeholder='O que vai fazer hoje?'
          value={newTesk}
          onChangeText={(task) => setNewTask(task)}
          ref={inputRef}
        />

        <TouchableOpacity style={style.btn} onPress={() => handleAdd()} >
          <Text style={style.btntext}>+</Text>
        </TouchableOpacity>        

      </View>

      <FlatList 
        keyExtractor={item => item.key}
        data={tasks}
        renderItem={({item}) => <Task data={item} deleteItem={handleDelete} editItem={handleEdit} /> }
      />

    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff'
  },
  containerc: {
    padding: 10,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#141414',
    height: 45,
  },
  btn: {
    backgroundColor: '#141414',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    paddingHorizontal: 14,
    borderRadius: 4,
  },
  btntext: {
    color: '#fff',
    fontSize: 22,
  },
  alert: {
    flexDirection: 'row',
    marginBottom: 8,
    marginLeft: 10,
  },
  textalert:{
    marginLeft: 5, 
    color: '#ff0000'
  }
});