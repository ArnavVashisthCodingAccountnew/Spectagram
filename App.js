import React,{Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import DrawerBottomTab from './navigation/drawer'
export default class App extends Component {
 render(){
  return (
    <NavigationContainer>
    <DrawerBottomTab/>
    </NavigationContainer>
  );
 }
  
}

const stylus = StyleSheet.create({

 
}); 
  