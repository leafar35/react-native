import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomeTab from "../Pages/HomeTab";
import Detail from '../Pages/Detail';

const Stack = createStackNavigator();

export default function StackRoutes(){
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home"
                component={HomeTab}
            />
            <Stack.Screen 
                name="detail"
                component={Detail}
            />
        </Stack.Navigator>
    );
}
