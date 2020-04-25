import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import BottomTabRouter from './BottomTabRouter';
import Screen1 from '../screens/DrawerScreens/Screen1';
import Screen2 from '../screens/DrawerScreens/Screen2';
import VideoPlayer from '../screens/DrawerScreens/VideoPlayer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerPosition="right"
      backBehavior="initialRoute"
      drawerContentOptions={{
        style: {padding: 0, margin: 0},
      }}
      drawerStyle={{
        padding: 0,
        margin: 0,
      }}
      // Use this for custome drawer.
      // drawerContent={({state, navigation, descriptors, progress}) => (
      //   <CustomeDrawerComponent
      //     state={state}
      //     navigation={navigation}
      //     descriptors={descriptors}
      //     progress={progress}
      //   />
      // )}
    >
      <Drawer.Screen name="BottomTab" component={BottomTabRouter} />
      <Drawer.Screen name="Screen1" component={Screen1} />
      <Drawer.Screen name="Screen2" component={Screen2} />
      <Drawer.Screen name="Video Player" component={VideoPlayer} />
    </Drawer.Navigator>
  );
}
