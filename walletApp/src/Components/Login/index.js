import React,{useState} from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import firebase from '../../Connects/firebaseConnection';

export default function Login({changeStatus}){
    const [type, setType] = useState('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    function makeLogin(){
        if(type == 'login'){
            return firebase.auth().signInWithEmailAndPassword(email, password)
            .then((value) => {
                changeStatus(value.user.uid);
            }).catch(() => {
                alert('Houve algo de errado!');
            });
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((value) => {
            changeStatus(value.user.uid);
        }).catch(() => {
            alert('Houve algo de errado!');
        });
    }

    return(
        <SafeAreaView style={style.container}>
            <View style={style.content}>
                <Text style={style.text}>E-mail</Text>
                <TextInput 
                    placeholder='Digite seu e-mail'
                    value={email}
                    style={style.input}
                    onChangeText={(email) => setEmail(email)}
                />
                <Text style={style.text}>Password</Text>
                <TextInput 
                    type='password'
                    placeholder='******************'
                    value={password}
                    style={style.input}
                    onChangeText={(password) => setPassword(password)}
                />
                <View style={style.areaBtn}>
                    <TouchableOpacity style={style.btnS} onPress={() => makeLogin() }>
                        <Text style={style.btntext}>
                            { type === 'login' ? 'Acessar' : 'Cadastrar' }
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.btnC} onPress={() => setType( type == 'login' ? 'cadastrar' : 'login' )}>
                        <Text>
                            { type === 'login' ? 'Criar uma conta' : 'Já possuo uma conta!' }
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: 40,
        backgroundColor: '#F2f6fc',
        paddingHorizontal: 10,
    },
    content: {
        margin: 10,
    },
    input:{
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 4,
        height: 45,
        padding: 10,
        borderWidth: 1,
        borderColor: '#141414'
    },
    areaBtn:{
        justifyContent: 'center'
    },
    btnS: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2223fc',
        height: 45,
        marginBottom: 10
    },
    btnC: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        marginBottom: 10
    },
    btntext:{
        textAlign: 'center',
        color: '#FFFF'
    }
});