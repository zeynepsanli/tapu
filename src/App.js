import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './screens/Login/Login';
import SignUpScreen from './screens/SignUp/SignUp';
import MainPage from './screens/MainPage/MainPage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function LoginStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator
        screenOptions={{
          keyboardHidesTabBar: true,
          headerShown: false,
          tabBarStyle: [{ position: 'absolute' }]
        }}
      >
        <Tab.Screen
          name="List"
          component={MainPage}
          options={{
            tabBarLabel: 'List',
            tabBarIcon: () => (
              <Image source={require('./assets/list.png')} style={{ width: 24, height: 24, }} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={LoginStackScreen}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: () => (
              <Icon name="account" color={"#4D4D4D"} size={34} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}