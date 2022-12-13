export const AuthContext = createContext({});
import {Alert} from 'react-native';
import HttpService from '../services/httpservice';
import React, { createContext, useEffect, useState } from "react";

function AuthProvider({ children }){

    const [token, setToken] = useState(null);

    async function Authenticate(email, password){
        try{
            let response = await HttpService.post('authenticate/signIn', {
                email: email,
	            password: password
            });
            if(!response.data.successul)
                throw new Error('Credenciais Invalidas!');
            setToken(response.data);
        }catch(e){
            setToken(null);
            Alert.alert('Oops!', 'Credenciais Invalidas!');
        }
    }    

    async function signOut(){
        setToken(null);
    }

    return (
        <AuthContext.Provider value={{signed: !!token, Authenticate, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;