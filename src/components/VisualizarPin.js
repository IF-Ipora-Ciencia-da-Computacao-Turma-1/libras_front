import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity, Alert, Button,Image } from 'react-native';
import { React, useEffect, useState } from 'react';
import api from '../api/api';
import { useRoute } from '@react-navigation/native';

export default function VisualizarPin({navigation}) {

    const route = useRoute();
    const { cidade } = route.params


  // const getCidadeSinal = (nomeCidade) => {
  //     const cidades = citiesData.find((item) => item.nome === nomeCidade);
    
  //     if (cidade) {
  //       return cidades.sinal;
  //     } else {
  //       return null;
  //     }
  //   };


  return (
    <View style={styles.container}>

      <View style={styles.Imagem}>
        <Image
          source={{ uri: cidade.sinal }}
          style={styles.img}
        />
      </View>
      <View style = {styles.texts}>
        <Text style = {styles.title}>Cidade: {cidade.nome}</Text>
        <Text style = {styles.title}>Estado: {cidade.estado}</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('MapView')}>
        <Text style = {styles.textButton}>Voltar</Text>
      </TouchableOpacity>

    </View>
    );
}

  
const styles= StyleSheet.create({
container: {
  
  width: '100%',
  height: '100%',
  backgroundColor: '#15B6D6',
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',

},

title: {
  color: '#fff',
  fontSize: 20,
  fontWeight: 'bold',
  marginTop: 10,
  textAlign: 'center',
},

Imagem:{
  borderRadius: 50,
  height: '50%',
  width: '90%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  
},

img:{
  // borderRadius: 50,
  // width: '95%',
  // height: '95%',
  
        width: '100%',
        height: '100%',
        borderRadius: 200,

},

textButton:{
 
  paddingVertical: 20,
  paddingHorizontal: 40,
  backgroundColor: '#FFC831',
  color: '#FFFFFF',
  fontWeight: 'bold',
  fontSize: 20,
  borderRadius: 54,
  marginTop: 60,
},


});