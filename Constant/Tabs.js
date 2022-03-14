import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screen/Home';
import Search from '../Screen/Search';
import Profile from '../Screen/Profile';
import { View, Image } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';

const Tab = createBottomTabNavigator();

function Tabs() {

  return (

    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          height: 75,
          elevation: 0,
          backgroundColor: '#FFFFFF',

          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 10
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,

          elevation: 24

        }

      }}>

      <Tab.Screen name="SEARCH" component={Search} options={{
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              top: 10
            }}
          >
            <Image
              source={require('../assets/magnifier.png')}
              resizeMode='contain'
              style={{ width: 30, height: 30, bottom: 10, borderWidth: 5, tintColor: focused ? 'red' : 'gray' }} />
          </View>
        )
      }}
      />


      <Tab.Screen name="POKEMON" component={Home} options={{
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              top: 10

            }}
          >
            <Image
              source={require('../assets/pokeball.png')}
              resizeMode='contain'
              style={{ width: 70, height: 70, bottom: 10, borderWidth: 5, tintColor: focused ? 'red' : 'gray' }} />
          </View>
        )
      }}
      />

      <Tab.Screen name="PROFILE" component={Profile} options={{
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              top: 10

            }}
          >
            <Image
              source={require('../assets/user.png')}
              resizeMode='contain'
              style={{ width: 35, height: 35, bottom: 10, borderWidth: 5, tintColor: focused ? 'red' : 'gray' }} />
          </View>
        )
      }}
      />

    </Tab.Navigator>

  );
}
export default Tabs