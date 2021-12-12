import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {SCREEN_ROUTER} from '../constants/Constant';
import ProductScreen from '../screens/ProductScreen/ProductScreen';
import MapScreen from '../screens/Map/MapScreen';
import {BottomTabComponent} from '../components';
const MainStack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const Menu = () => {
  return (
    <BottomTab.Navigator
      tabBar={props => <BottomTabComponent {...props} />}
      screenOptions={{
        activeBackgroundColor: 'red',
        inactiveBackgroundColor: 'white',
        inactiveTintColor: 'red',
        activeTintColor: 'white',
      }}
      initialRouteName={SCREEN_ROUTER.PRODUCT}>
      <BottomTab.Screen
        name={SCREEN_ROUTER.PRODUCT}
        component={ProductScreen}
      />
      <BottomTab.Screen name={SCREEN_ROUTER.MAP} component={MapScreen} />
    </BottomTab.Navigator>
  );
};
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName={SCREEN_ROUTER.MENU}>
        <MainStack.Screen
          name={SCREEN_ROUTER.MENU}
          component={Menu}
          options={{
            headerShown: false,
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
