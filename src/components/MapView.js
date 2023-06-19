import React from "react";
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import MapView, { Marker, MapCallout } from "react-native-maps";


// const [cidades, setCidades] = useState([]);

// async function getAllCities(){
//   const response = await axios.get('http://apiif.murillocastro.com.br/public/api/cidade/index');
//       console.log(response.data);
//       setCidades(response.data);
// }
// const YourScreen = () => {
//   useEffect(() => {
//     fetchData();
//   }, []);

//   async function fetchData() {
//     try {
//       const response = await axios.get('https://exemplo.com/api/cidade/index');
//       const result = response.data;
//       console.log(result); // Faça algo com o JSON recebido
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }

const cities = {
  cidade1: {
    latitude: -16.6798608,
    longitude: -49.3774167,
    title: 'Goiânia',
    description: 'Capital do estado de Goiás.',
  },
  cidade2: {
    latitude: -16.4340564,
    longitude: -51.147912,
    title: 'Iporá',
    description: 'Cidade do estado de Goiás',
  },
}


export default function MapHomeComponent({navigation}){
    // getAllCities();
    // YourScreen();
    const [cidades, setCidades] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get('https://apiif.murillocastro.com.br/public/api/cidade/index');
      const data = response.data;
      console.log(data);
      setCidades(data); // Armazene os dados da API no estado 'cidades'
    } catch (error) {
      console.log(error);
    }
  }

    return(
        <SafeAreaView style = {styles.SafeAreaView}>
            <StatusBar backgroundColor="white"></StatusBar>
            <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                  latitude: -16.2980797,
                  longitude: -50.1164483,
                  latitudeDelta: 5,
                  longitudeDelta: 5,
                }}
            >
              
              {/* Renderize os pins de localização */}
              {Object.keys(cidades).map((cidadeId) => {
                const cidade = cidades[cidadeId];
                return (
                  <Marker
                    key={cidadeId}
                    coordinate={{
                      latitude: cidade.latitude,
                      longitude: cidade.longitude,
                    }}
                    title={cidade.nome}
                    description={cidade.estado}
                    //onPress={() => navigation.navigate('VisualizarPin',{ cidade })}
                    icon={require('../imgs/Marker.png')}

                    onCalloutPress={() => navigation.navigate('VisualizarPin',{ cidade })}
                  
                  >
                  
                  <MapCallout 
                    style={styles.modalOverlay}>
                      <View style = {styles.modalOverlayContent}>
                        <Text style = {styles.h2}>Ver sinal de</Text>
                        <Text style = {styles.h1}>{cidade.nome} - {cidade.estado}</Text>
                      </View>
                  </MapCallout>

                  </Marker>

                );
              })}

        </MapView>

         {/* Componente de informações que aparece ao clicar no marcador */}
      
                
            </View>

          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style = {styles.textButton}>Voltar</Text>
          </TouchableOpacity>  
        </SafeAreaView>

        
    )
}



const styles = StyleSheet.create({  
    
  
    modalOverlay:{
      color:  'green',
      
    },

    modalOverlayContent:{
      
     
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: '100%',
      height: '100%',
      borderRadius: 10,
      
    },

    h1:{
      display: "flex",
      fontSize: 15,
      fontWeight: 900,
      paddingTop: 5,
      

    },

    SafeAreaView:{
        width: '100%',
        flex:   1,

        backgroundColor: '#0000Ff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    container: {
      width: '100%',
      height: '100%',
      
     
    },
    map: {
      width: '100%',
      height: '100%',
    },

    
textButton:{
 
  paddingVertical: 20,
  paddingHorizontal: 40,
  backgroundColor: '#FFC831',
  color: '#FFFFFF',
  fontWeight: 'bold',
  fontSize: 20,
  borderRadius: 10,
  position: 'absolute',
  bottom: 15,
  alignSelf: 'center',
},
  });