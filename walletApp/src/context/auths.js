import firebase from '../connection/index';
export const AuthContext = createContext({});
import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

function AuthProvider({ children }){

    const [user, serUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadStorage(){
            const storageAuth = await AsyncStorage.getItem('Auth_user');
            if(storageAuth){
                serUser(JSON.parse(storageAuth));
                setLoading(false);
            }
            setLoading(false);
        }

        loadStorage();

    },[]);

    async function signIn(email, password){
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async(value) => {
            let uid = value.user.uid;
            await firebase.database().ref('usuarios').child(uid).once('value')
            .then((snapshot) => {
                let data = {
                    uid: uid,
                    name: snapshot.val().name,
                    email: value.user.email,
                };
                serUser(data);
                storageUser(data);
            });
        })
        .catch(err => {
            alert(err.code);
        });
    }

    async function signUp(email, password, name){
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async(value) => {
            let uid = value.user.uid;
            await firebase.database().ref('usuarios').child(uid).set({
                saldo: 0,
                name: name
            })
            .then(value => {
                let data = {
                    uiid: uid,
                    name: name,
                    email: email
                };
                serUser(data);
                storageUser(data);
                alert('Usuário cadastra com sucesso!');
            })

        }).catch(err => {
            console.log(err);
            console.log('Tente novamente mais tarde!');
        })
    }

    async function storageUser(data){
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    }

    async function signOut(){
        await firebase.auth().signOut();
        await AsyncStorage.clear()
        .then(() => {
            serUser(null);
        });
    }

    return (
        <AuthContext.Provider value={{signed: !!user, user, signUp, signIn, loading, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;