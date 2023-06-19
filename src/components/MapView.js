import React from "react";
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import { SafeAreaView, StyleSheet, View,  } from "react-native";
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
               
               <MapCallout>

               </MapCallout>

              </Marker>

            );
          })}
        </MapView>

         {/* Componente de informações que aparece ao clicar no marcador */}
      
                
            </View>

        </SafeAreaView>

        
    )
}



const styles = StyleSheet.create({  
    modalOverlay:{
      width: 300,
      height: 300,
      backgroundColor: '#FF0000',

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
  });