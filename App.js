import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';


import TaskDashboard from './TaskDashboard/TaskDashboard';
import Profile from './Profile/Profile';
import CategoryPage from './TaskDashboard/CategoryPage';


const AppNavigator = createBottomTabNavigator({
  Home: { 
    screen: TaskDashboard,
    // CategoryPage: CategoryPage,
    navigationOptions: {
      tabBarIcon: () => (
        <Icon name='ios-home' size={23} color='black' />
      ), 
    },
  }, 
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarIcon: () => (
        <Icon name='ios-person' size={23} color='black' />
      ), 
    },
  },
});

const AppNav = createAppContainer(AppNavigator);

export default function App() {
  return <AppNav />
}