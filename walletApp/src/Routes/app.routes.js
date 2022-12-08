import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

const AppDrawer = createDrawerNavigator();

import Dashboard from '../Pages/Dashboard';
import Grid from '../Pages/Grid';
import New from '../Pages/New';

function AppRoutes(){

    return (
        <AppDrawer.Navigator 
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
            <AppDrawer.Screen name="Dashboard" component={Dashboard} />
            <AppDrawer.Screen name="Entradas" component={Grid} initialParams={{title: 'Entradas'}} />
            <AppDrawer.Screen name="Saídas" component={Grid} initialParams={{title: 'Saídas'}} />
            <AppDrawer.Screen name="New" component={New} />
        </AppDrawer.Navigator>
    )

}

export default AppRoutes;