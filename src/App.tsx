/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import DrawerNavigation from './routers/DrawerNavigation';
import BottomTabRouter from './routers/BottomTabRouter';

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
};

export default App;
