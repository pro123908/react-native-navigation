import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Messages from '../screens/Messages';
import Feed from '../screens/Feed';
import HomeScreen from '../screens/HomeScreen';
import DrawerNavigator from './DrawerNavigator';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tabs = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}>
      <Tabs.Screen
        name="messages"
        component={Messages}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icon name="wechat" color={color} size={30} />
          ),
          tabBarBadge: 3,
        }}></Tabs.Screen>
      <Tabs.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icon name="feed" color={color} size={30} />
          ),
        }}></Tabs.Screen>
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icon name="home" color={color} size={30} />
          ),
        }}
        component={HomeScreen}
        initialParams={{itemId: 100, desc: 'Item 100'}} //default params
      ></Tabs.Screen>
      <Tabs.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icon name="window-restore" color={color} size={30} />
          ),
        }}></Tabs.Screen>
    </Tabs.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
