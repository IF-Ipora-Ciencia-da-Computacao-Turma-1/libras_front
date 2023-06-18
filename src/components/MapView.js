import React from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View,  } from "react-native";
import MapView, { Marker, MapCallout } from "react-native-maps";

const cidades = {
  cidade1: {
    latitude: -16.6798608,
    longitude: -49.3774167,
    title: 'Goiânia',
    description: 'Descrição da Cidade 1',
  },
  cidade2: {
    latitude: -16.4340564,
    longitude: -51.147912,
    title: 'Iporá',
    description: 'Descrição da Cidade 2',
  },
}


export default function MapHomeComponent({navigation}){
    return(
        <SafeAreaView style = {styles.SafeAreaView}>
            <StatusBar backgroundColor="red"></StatusBar>
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
                title={cidade.title}
                description={cidade.description}
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