
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button, Alert,Image } from 'react-native';

import Home from "../components/Home";
import PaginaDois from "../components/pagina2";

const Stack = createNativeStackNavigator();

export default function Router() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="PaginaDois" component={PaginaDois} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

