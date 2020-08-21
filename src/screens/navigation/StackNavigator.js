import React from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import HomeScreen from '../HomeScreen';
import AboutScreen from '../AboutScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 25,
        },
      }}
      // initialRouteName="About" screenOptions={{title: 'Screen'}}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{itemId: 100, desc: 'Item 100'}} //default params
      >
        {/* {() => (
          <View>
            <Text>Home</Text>
          </View>
        )} */}
      </Stack.Screen>
      <Stack.Screen
        name="About"
        initialParams={{itemId: 100, desc: 'Item 100'}} //default params
        // options={{title: 'About Screen'}}
        options={({route}) => ({
          title: route.params.title ? route.params.title : 'About Screen',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontSize: 25,
          },
          headerTitle: (props) => (
            <View {...props}>
              <Text>Custom component title</Text>
            </View>
          ),
          headerRight: () => (
            <Button
              title="RightHeader"
              onPress={() => alert('This is a button!')}
            />
          ),
          headerLeft: (props) => <HeaderBackButton {...props} />,
        })}
        component={AboutScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default StackNavigator;
