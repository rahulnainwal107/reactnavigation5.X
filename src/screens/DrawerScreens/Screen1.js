/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';

const Screen1 = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Drawer screen 1</Text>
      <Text style={{textAlign: 'center'}}>
        Open drawer from right side by sliding toward left side from right.
      </Text>
    </View>
  );
};

export default Screen1;
