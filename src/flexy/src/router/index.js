/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Home,
  Wallet,
  Profile,
  Chat,
  Splash,
  Login,
  Auth,
  SwipeGame,
} from '../pages';
import {BottomNavigation} from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeApp = () => {
  return (
    <Stack.Navigator initialRouteName="Homess">
      <Stack.Screen
        name="Homess"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SwipeGame"
        component={SwipeGame}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const WalletApp = () => {
  return (
    <Stack.Navigator initialRouteName="Wallets">
      <Stack.Screen
        name="Wallets"
        component={Wallet}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigation {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeApp}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletApp}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Chat" component={Chat} options={{headerShown: false}} />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{title: 'Sign In', headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
