import React, { useContext } from 'react';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { AuthContext } from '../context/auths';
import { ActivityIndicator, View } from 'react-native';

function Routes(){
    const { signed, loading } = useContext(AuthContext);

    if(loading){
        return (
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator size='large' color='#131313' />
            </View>
        )
    }


    return (
        signed ? <AppRoutes /> : <AuthRoutes />
    )
}

export default Routes;

