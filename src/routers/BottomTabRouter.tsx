import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackRouter from './HomeStackRouter';
import ProfileStackRouter from './ProfileStackRouter';

const Tab = createBottomTabNavigator();

export default function BottomTabRouter() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Home" component={HomeStackRouter} />
                <Tab.Screen name="Profile" component={ProfileStackRouter} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}