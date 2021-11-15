import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro1 from '../screens/Welcome-intro/intro1'
import Verification from "../screens/Verfication";
import payment from '../screens/payment13'
//import { createDrawerNavigator } from '@react-navigation/drawer';
const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
export default function Navigation() {
  return (


<NavigationContainer>
      <Stack.Navigator>
{/* 
         <Stack.Screen name="Intro1" component={Intro1} options={{}} />
        <Stack.Screen name="Verification" component={Verification} options={{ title: 'Verification' }} />   */}
        <Stack.Screen name="payment" component={payment} options={ { title: '' ,   headerStyle: {
            backgroundColor: '#ecf1fa',
          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            fontWeight: 'bold',
          },
         }} />



      </Stack.Navigator>
    </NavigationContainer>
  );
};


