import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../HomeScreen';
import AboutScreen from '../AboutScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
    // initialRouteName="About" screenOptions={{title: 'Screen'}}
    >
      <Stack.Screen name="Home" component={HomeScreen}>
        {/* {() => (
          <View>
            <Text>Home</Text>
          </View>
        )} */}
      </Stack.Screen>
      <Stack.Screen
        name="About"
        // options={{title: 'About Screen'}}
        component={AboutScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default StackNavigator;
