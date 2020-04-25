import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Screen1 from '../screens/TopTabScreens/Screen1';
import Screen2 from '../screens/TopTabScreens/Screen2';

const Tab = createMaterialTopTabNavigator();

function OrderScreenTopTabRouter() {
  return (
    <Tab.Navigator
      initialRouteName="Screen1"
      swipeEnabled={false}
      screenOptions={({}) => ({
        backBehavior: 'initialRoute',
        lazy: true,
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'grey',
        tabStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          // width: 'auto',
          // padding: 0,
        },
        labelStyle: {
          //fontSize: Fonts.size.topTabTextSize,
          fontWeight: '600',
          //textTransform: 'none',
          //paddingRight: 10,
        },
        style: {
          backgroundColor: 'white',
          elevation: 0,
          shadowOpacity: 0,
          //marginBottom: 5,
          //marginHorizontal: 10,
        },
        indicatorStyle: {
          backgroundColor: 'red',
        },
      }}>
      <Tab.Screen name="Screen1" component={Screen1} />
      <Tab.Screen name="Screen2" component={Screen2} />
    </Tab.Navigator>
  );
}

const AddSafeArea = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <OrderScreenTopTabRouter />
    </SafeAreaView>
  );
};
export default AddSafeArea;
