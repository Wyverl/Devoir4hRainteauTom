import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from "expo-status-bar";
import React, { Component, useDebugValue, useState } from "react";
import Accueil from "./Pages/Accueil";
import Details from "./Pages/Details";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Accueil">
          <Stack.Screen name="Accueil" component={Accueil} options={{ title: "Accueil" }} />
          <Stack.Screen
            name="Details"
            component={Details}
          />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
