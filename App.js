// // import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// In App.js in a new project

import * as React from 'react';
import {StyleSheet, View,Dimensions, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  DetailsScreen from './screen/details.js';
import LoginScreen from './screen/login.js';

function HomeScreen({navigation}) {
  return (
      <View style={styles.container}>
          
          <Button
          title="Go to Login"
          onPress={() => navigation.navigate('Login')}
          />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor: "#303F9F",
        },
        headerTintColor:"#FFFFFF",
        headerBackTitleStyle:{
          fontWeight:'bold'
        }
      }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});

export default App;


