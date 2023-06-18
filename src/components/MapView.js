import React from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const cidades = {
  cidade1: {
    latitude: -16.2980797,
    longitude: -50.1164483,
    title: 'Cidade 1',
    description: 'Descrição da Cidade 1',
  },
  cidade2: {
    latitude: -17.2980797,
    longitude: -50.1164483,
    title: 'Cidade 2',
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
                onPress={() => navigation.navigate('VisualizarPin',{ cidade })}
              />
            );
          })}
        </MapView>
                
            </View>

        </SafeAreaView>

        
    )
}


const styles = StyleSheet.create({
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