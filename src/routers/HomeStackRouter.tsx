import React, { useState } from 'react';
import { Button, Text, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import HomeCopy from '../screens/Home copy';
import image1 from '../images/image1.png';

const Stack = createStackNavigator();

export default function HomeStackRouter(props: any) {
    console.log('Props ', props)
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: 'tomato' },
                headerTransparent: true,
                headerBackground: () => {
                    return (
                        <Image source={image1} style={{ height: 60, width: '100%' }} />
                    )
                }
            }}
        >
            <Stack.Screen name="Home"
                component={HomeScreen}
                options={{
                    title: 'Home'
                }} />
            <Stack.Screen name="HomeCopy" component={HomeCopy} />
        </Stack.Navigator>
    );
}