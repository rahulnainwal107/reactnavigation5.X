import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import HomeCopy from '../screens/Home copy'

const Stack = createStackNavigator();

export default function HomeStackRouter() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="HomeCopy" component={HomeCopy} />
        </Stack.Navigator>
    );
}