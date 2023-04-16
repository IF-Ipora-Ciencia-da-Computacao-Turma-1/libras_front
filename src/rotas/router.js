
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../components/Home'
import PaginaDois from '../components/Pagina2'

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

