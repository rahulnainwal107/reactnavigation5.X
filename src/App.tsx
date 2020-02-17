/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import BottomTabRouter from './routers/BottomTabRouter';

const App: () => React$Node = () => {
  return (
    <BottomTabRouter />
  );
};

export default App;
