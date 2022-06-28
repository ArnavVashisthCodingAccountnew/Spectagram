import React,{Component} from 'react';
import {StyleSheet} from "react-native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Feed from '../screens/feed';
import CStory from '../screens/creaostory';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
const Tabo = createMaterialBottomTabNavigator();
const BottomTabNavo = () => {
  return (
    <Tabo.Navigator
      labeled={false} barStyle={stylus.bottomTabStyle} screenOptions=
      {({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Story Feed') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Create') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          }
          return (
            <Ionicons
              name={iconName}
              size={RFValue(25)}
              color={color}
              style={stylus.icons}
            />
          );
        },
      })}
      activeColor={'#ee8249'} inactiveColor={'gray'}
      >
      <Tabo.Screen name="Story Feed" component={Feed} />
      <Tabo.Screen name="Create" component={CStory} />
    </Tabo.Navigator>
  );
};
const stylus = StyleSheet.create({ bottomTabStyle: { backgroundColor: "#2f345d", height: "8%", borderTopLeftRadius: 30, borderTopRightRadius: 30, overflow: "hidden", position: "absolute" }, icons: { width: RFValue(30), height: RFValue(30) } });

export default BottomTabNavo;
