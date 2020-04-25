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

const Screen2 = ({navigation, route}) => {
  const {userName} = route.params;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Navigation parems is {userName}</Text>
      <Button
        title="Go to screen1"
        onPress={() => navigation.navigate('Screen1')}
      />
      <Text style={{textAlign: 'center'}}>
        Open drawer from right side by sliding toward left side from right.
      </Text>
    </View>
  );
};

export default Screen2;
