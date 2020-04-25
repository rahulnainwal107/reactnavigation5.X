import React, {useState} from 'react';
import {Button, Text, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Screen1 from '../screens/HomeScreen/Screen1';
import Screen2 from '../screens/HomeScreen/Screen2';
import image1 from '../images/image1.png';

const Stack = createStackNavigator();

export default function HomeStackRouter(props: any) {
  console.log('Props ', props);
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'black',
        headerStyle: {backgroundColor: 'tomato'},
        headerTransparent: false,
        headerBackground: () => {
          return (
            <Image source={image1} style={{height: '100%', width: '100%'}} />
          );
        },
      }}>
      <Stack.Screen
        name="Screen1"
        component={Screen1}
        options={{
          title: 'Screen1',
        }}
      />
      <Stack.Screen
        name="Screen2"
        component={Screen2}
        options={{
          title: 'Screen2',
        }}
      />
    </Stack.Navigator>
  );
}
