import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        style={styles.navBtn}
        onPress={
          () => navigation.navigate('About')
          // navigation.push("About")
          // navigation.popToTop();
          // navigation.goBack()
          //navigation.navigate("Home")
        }>
        <Text style={{color: '#fff', fontSize: 20}}>About Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  navBtn: {
    marginVertical: 10,
    backgroundColor: 'rgb(0,0,0)',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});

export default HomeScreen;
