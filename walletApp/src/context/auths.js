import firebase from '../connection/index';
import React, { createContext, useState } from "react";
export const AuthContext = createContext({});

function AuthProvider({ children }){

    const [user, serUser] = useState(null);

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
                alert('Usuário cadastra com sucesso!');
            })

        }).catch(err => {
            console.log(err);
            console.log('Tente novamente mais tarde!');
        })
    }

    return (
        <AuthContext.Provider value={{signed: !!user, user, signUp}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;