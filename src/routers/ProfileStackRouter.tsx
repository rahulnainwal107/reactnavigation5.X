import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Screen1 from '../screens/HomeScreen/Screen1';
import Screen2 from '../screens/HomeScreen/Screen2';

const Stack = createStackNavigator();

function ProfileStackRouter() {
  return (
    <Stack.Navigator>
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

export default ProfileStackRouter;
