import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../screens/Profile';
import ProfileCopy from '../screens/Profile copy'

const Stack = createStackNavigator();

function ProfileStackRouter() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="ProfileCopy" component={ProfileCopy} />
        </Stack.Navigator>
    );
}

export default ProfileStackRouter;