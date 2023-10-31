import React from 'react';
import {
  createAppContainer
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
  
const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Home: createStackNavigator(
        { Home, ProductDetail },
        {
          screen: Home,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name="home" size={24} color={tintColor} />,
          },
        },
      ),
      Cart: {
        screen: Cart,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => <Icon name="shopping-cart" color={tintColor} size={24} />,
        },
      },
    },
    {
      initialRouteName: 'Home',
      tabBarOptions: {
        showLabel: false,
        activeTintColor: '#E89A9D',
        inactiveTintColor: '#e0e0e0',
      },
    },
  ),
);

export default Routes;
