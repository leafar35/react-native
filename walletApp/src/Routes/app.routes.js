import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

const AppDrawer = createDrawerNavigator();

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
            <AppDrawer.Screen name="Home" component={Home} />
            <AppDrawer.Screen name="Registrar" component={New} />
            <AppDrawer.Screen name="Profile" component={Profile} />
        </AppDrawer.Navigator>
    )

}

export default AppRoutes;