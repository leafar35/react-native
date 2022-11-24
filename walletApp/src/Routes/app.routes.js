import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../Pages/Home';
import New from "../Pages/New";
import Profile from "../Pages/Profile";
import CustomDrawer from "../Components/CustomDrawer";

const AppDrawer = createDrawerNavigator();

function AppRoutes(){

    return (
        <AppDrawer.Navigator 
            drawerContent={ (props) => <CustomDrawer {...props} /> }
            useLegacyImplementation={true}
            screenOptions={{
                headerShown:false,
                drawerStyle: {
                    backgroundColor: '#171717',
                },
                labelStyle:{
                    fontWeight: 'bold',
                },
                drawerActiveTintColor: '#FFF',
                drawerActiveBackgroundColor: '#00b94a',
                drawerInactiveBackgroundColor: '#000',
                drawerInactiveTintColor: '#DDD',
                drawerItemStyle: {
                    marginVertical: 5,
                }
            }}
        >
            <AppDrawer.Screen name="Home" component={Home} />
            <AppDrawer.Screen name="Registrar" component={New} />
            <AppDrawer.Screen name="Profile" component={Profile} />
        </AppDrawer.Navigator>
    )

}

export default AppRoutes;