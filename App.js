import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

//import Home from './src/components/Home'
//import PaginaDois from './src/components/Pagina2';

import Router from "./src/rotas/router"

export default function App() {
  return (
    
    <Router/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

