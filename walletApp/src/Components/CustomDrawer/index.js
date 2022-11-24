import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { AuthContext } from '../../context/auths';

export default function CustomDrawer(props) {
    const { user, signOut } = useContext(AuthContext);

    return (
        <DrawerContentScrollView>
            <View style={{alignItems:'center', justifyContent: 'center', marginTop: 25}}>
                <Image
                    source={require('../../img/Logo.png')}
                    style={{width:85, height:85}}
                    resizeMode="contain"
                />
                <Text style={{
                    color: '#FFF',
                    fontSize: 18,
                    marginTop: 5
                }}>Bem Vindo</Text>
                <Text style={{
                    color: '#FFF',
                    fontSize: 17,
                    fontWeight: 'bold',
                    paddingBottom: 25
                }}>{ user && user.name }</Text>
            </View>

            <DrawerItemList {...props} />

            <DrawerItem 
                {...props}
                label='Sair do App'
                inactiveBackgroundColor='#c62c36'
                onPress={() => signOut() }
            />

        </DrawerContentScrollView>
    );
}