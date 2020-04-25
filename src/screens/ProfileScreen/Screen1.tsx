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
  StatusBar,
  Button,
} from 'react-native';

const Screen1: () => React$Node = (props: any) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="Go to screen2"
        onPress={props.navigation.navigate('Screen2')}
      />
      <Text style={{textAlign: 'center'}}>
        Open drawer from right side by sliding toward left side from right.
      </Text>
    </View>
  );
};

export default Screen1;
