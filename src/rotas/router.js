
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../components/Home';
import PaginaDois from '../components/pagina2';
import HomeScreen from '../components/HomeScreen';
import ProfileScreen from '../components/ProfileScreen';
import MapView from '../components/MapView';
import VisualizarPin from '../components/VisualizarPin';

const Stack = createNativeStackNavigator();

export default function Router() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
          <Stack.Screen name="Home" component={Home} />
         
          <Stack.Screen name="HomeScreen" component={HomeScreen}/>
          <Stack.Screen name="Profile" component={ProfileScreen}/>
          <Stack.Screen name="MapView" component={MapView}/>
          <Stack.Screen name="VisualizarPin" component={VisualizarPin}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

