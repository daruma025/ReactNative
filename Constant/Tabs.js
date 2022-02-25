import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screen/Home';
import MyList from '../Screen/MyList';
import Setting from '../Screen/Setting';
import Profile from '../Screen/Profile';
import { View, Image } from 'react-native';

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
          borderRadius: 15,
          bottom: 10,
          left: 20,
          right: 20,
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

      <Tab.Screen name="NETHUB" component={Home} options={{
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              top: 10

            }}
          >
            <Image
              source={require('../assets/home.png')}
              resizeMode='contain'
              style={{ width: 35, height: 35, bottom: 10, borderWidth: 5, tintColor: focused ? 'red' : 'gray' }} />
          </View>
        )
      }}
      />

      <Tab.Screen name="MY LIST" component={MyList} options={{
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              top: 10

            }}
          >
            <Image
              source={require('../assets/to-do-list.png')}
              resizeMode='contain'
              style={{ width: 35, height: 35, bottom: 10, borderWidth: 5, tintColor: focused ? 'red' : 'gray' }} />
          </View>
        )
      }}
      />

<Tab.Screen name="SETTING" component={Setting} options={{
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              top: 10

            }}
          >
            <Image
              source={require('../assets/settings.png')}
              resizeMode='contain'
              style={{ width: 35, height: 35, bottom: 10, borderWidth: 5, tintColor: focused ? 'red' : 'gray' }} />
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
              source={require('../assets/profile-user.png')}
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