import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from '../Screen/LogIn';
import Tabs from '../Constant/Tabs';
import SignUp from '../Screen/SignUp';
const Stack = createStackNavigator();

export default function Routes() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LogIn} options={{headerShown:false}}/>
          <Stack.Screen name="Tabs" component={Tabs} options={{headerShown:false}}/>
          <Stack.Screen name="Signup" component={SignUp} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
