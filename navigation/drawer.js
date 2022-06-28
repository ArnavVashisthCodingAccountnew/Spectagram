import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PF from '../screens/profilo'
import BottomTabNavo from './bottomtab';
const Drawo = createDrawerNavigator();
const DrawerBottomTab = ()=>{
  return(
   <Drawo.Navigator>
     <Drawo.Screen name="Profile" component={PF}/>
     <Drawo.Screen name="Home" component={BottomTabNavo}/>

   </Drawo.Navigator>

  )
}

export default DrawerBottomTab;
