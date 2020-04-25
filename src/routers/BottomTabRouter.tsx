import * as React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStackRouter from './HomeStackRouter';
import ProfileStackRouter from './ProfileStackRouter';

const Tab = createBottomTabNavigator();

export default function BottomTabRouter() {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = '🏠';
          } else if (route.name === 'Profile') {
            iconName = '🕵️‍♀️';
          } else {
            iconName = '';
          }
          return (
            <View>
              <Text>{iconName}</Text>
            </View>
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'black',
      }}>
      <Tab.Screen name="Home" component={HomeStackRouter} />
      <Tab.Screen name="Profile" component={ProfileStackRouter} />
    </Tab.Navigator>
  );
}
