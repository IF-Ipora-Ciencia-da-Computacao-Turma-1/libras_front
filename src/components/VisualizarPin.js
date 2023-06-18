import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity, Alert, Button,Image } from 'react-native';
import { React, useEffect, useState } from 'react';
import api from '../api/api';
import { useRoute } from '@react-navigation/native';

export default function VisualizarPin() {

    const route = useRoute();
    const { cidade } = route.params


  return (
    <View style={styles.container}>
    
      <Text>{cidade.title}</Text>
      <Text>{cidade.description}</Text>

    </View>
    );
}

  
const styles= StyleSheet.create({
container: {
  
  width: '100%',
  maxWidth: '100%',
  height: '100%',
  backgroundColor: '#15B6D6',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  bottom: 0,
  boxSizing: 'border-box',
},

title: {
  color: '#fff',
  fontSize: 20,
  fontWeight: 'bold',
  marginTop: 50,
},

cardItem:{

  width: '95%', 
  height: 200,
  borderRadius: 10,
  borderColor: '#15B6D6',
  borderWidth: 1,
  padding: 10,
  marginTop: 10,
  marginBottom: 10,
  //margin: 'auto',
  alignSelf: 'center',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},

cardItemContent:{

  display: 'flex',
  flexDirection: 'row',
  height: '100%',

  
 /* backgroundColor: 'red',
  display: 'flex',
  flexDirection: 'row',
  padding: 5, 
  maxWidth: '90%',
  height: '100%',
  maxHeight: '100%', 

  alignSelf: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  */
},

List:{
    backgroundColor: '#fff',
    display: 'flex',
    maxWidth: '100%',
    
},

input: {
  marginTop: 10,
  height: 40,
  borderRadius: 10,
  paddingHorizontal: 24,
  fontSize: 16,
  //alignItems: 'stretch'
},

Img:{
 
  borderColor: '#15B6D6',
  borderWidth: 1,
  width: '100%',
  maxWidth: "30%",
  boxSizing: 'border-box',
},

Imagem:{
  height: '100%',
  width: '100%',
  borderRadius: 10,
},

Conteudo:{
  height: '100%',
  padding: 10,
},

cardItemSize:{
  width: '100%',
  height: '100%',

},

button: {
  marginTop: 10,
  height: 60,
  backgroundColor: 'blue',
  borderRadius: 10,
  paddingHorizontal: 24,
  fontSize: 16,
  alignItems: 'center',
  justifyContent: 'center',
  elevation: 20,
  shadowOpacity: 20,
  shadowColor: '#ccc',
},
buttonText: {
  color: '#fff',
  fontWeight: 'bold',
}
});